import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private titleService: Title, private metaTagService: Meta) {}
  title = 'Assessment';

  // Added the SEO
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaTagService.addTags([
      {
        name: 'keywords',
        content: 'Assessment',
      },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'Makozi Marizu-Ibewiro' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'date', content: '2023-03-06', scheme: 'YYYY-MM-DD' },
      { charset: 'UTF-8' },
    ]);
  }
}
