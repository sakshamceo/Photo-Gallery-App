import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SharedServiceService } from '../Shared/shared-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Article } from '../app.component.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{
  @Output() IHaveData = new EventEmitter<Article>();
  constructor(private share:SharedServiceService)
  {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  newEntry = new FormGroup({
    title: new FormControl('',Validators.required),
    link: new FormControl('',[Validators.required, Validators.pattern(/^https:\/\/.*\.(jpg|png)$/)]),
  });
  buttonWork()
  {
    this.share.setValue(this.newEntry.get('link')?.value||"",this.newEntry.get('title')?.value||"")
    this.IHaveData.emit({title:this.newEntry.get('title')?.value||"",link:this.newEntry.get('link')?.value||""});
    this.newEntry.reset();
  }

}
