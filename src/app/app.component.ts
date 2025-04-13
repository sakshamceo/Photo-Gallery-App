import { Component } from '@angular/core';
import { Article } from './app.component.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Photo-Gallery';
  article: Article[]=[];
  appendData(newArticle: Article) {
    this.article.push(newArticle);
    console.log('Updated list:', this.article);
  }
}
