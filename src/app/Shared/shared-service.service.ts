import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
linkSubject = new BehaviorSubject<string>('');
titleSubject = new BehaviorSubject<string>('');
link$ = this.linkSubject.asObservable();
title$ = this.titleSubject.asObservable();
  constructor() { }
  setValue(link:string,title:string)
  {
    this.linkSubject.next(link);
    this.titleSubject.next(title);
  }
}
