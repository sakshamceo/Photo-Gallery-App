import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedServiceService } from '../Shared/shared-service.service';
import { catchError, of, throwError } from 'rxjs';
import { Article } from '../app.component.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit{
  @Input() data: Article| undefined;
  title:string | undefined;
  link:string | undefined;
  constructor(private share:SharedServiceService)
  {}
  ngOnInit(): void {
    this.share.title$.pipe(catchError(error=>{console.log(error);return of ('Failed')})).subscribe(title=>{this.title=title;});
    this.share.link$.pipe(catchError(error=>{console.log(error);return of ('Failed')})).subscribe(link=>{this.link=link;});
  }

}
