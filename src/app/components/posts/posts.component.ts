import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-user',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  postData: any;
  postForm!: FormGroup;
  editPostForm!: FormGroup;
  showEditPostForm = false;
  editFormId: any;
  

  // variables to status of request;
  postCreated = false;
  postEdited = false;
  postDeleted = false;
  postDeletedId: any;
  constructor(private PostSService: PostsService, private fb: FormBuilder) {}

  ngOnInit() {
    this.PostSService.getPostsData().subscribe((data: any) => {
      console.log('data', data);
      this.postData = data;
      
    });

    this.initForm();
  }

  initForm() {
    this.postForm = this.fb.group({
      userId: [],
      id: [],
      title: [],
      body: [],
    });
  }
 

  createUser(event: any, postForm: { value: any }) {
    const postData = postForm.value;
    this.PostSService.createUser(postData).subscribe((data: any) => {
      console.log('post created', data);
      this.postCreated = true;
      setTimeout(() => {
        this.postCreated = false;
      }, 2000);
    });
  }

  editPost(
    event: any,
    data: { Id: any; userId: any; id: any; title: any; body: any }
  ) {
    this.showEditPostForm = true;
    this.editFormId = data.Id;
    this.editPostForm = this.fb.group({
      userId: [data.userId],
      id: [data.id],
      title: [data.title],
      body: [data.body],
    });
  }

  editPostData(event: any, postForm: { value: any }) {
    const postData = postForm.value;
    this.PostSService.editPost(postData).subscribe((data: any) => {
      console.log('post edited', data);
      this.postEdited = true;
      setTimeout(() => {
        this.postEdited = false;
        this.showEditPostForm = false;
      }, 2000);
    });
  }

  deletePost(event: any, postsData: { id: any }) {
    this.PostSService.deletePost(postsData).subscribe((data: any) => {
      console.log('post deleted', data);
      this.postDeletedId = postsData.id;
      this.postDeleted = true;
      setTimeout(() => {
        this.postDeleted = false;
      }, 2000);
    });
  }
}
