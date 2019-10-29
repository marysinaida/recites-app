import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

 @Input() quote:Quote;
 @Output() isComplete = new EventEmitter<boolean>();

 quoteComplete(complete:boolean){
   this.isComplete.emit(complete);
 }

//  upvote:number=0;
//  downvote:number=0;

 likeUpvote(i){
   this.quote[i].upvote++;
 }
 dislikeDownvote(i){
  this.quote[i].downvote++;
}

preNum:number
lastNum:number
counter:number
highestvote(){



for(this.counter=0; this.counter<this.quote.length; this.counter++){
  this.lastNum=this.quote[this.counter].numberOfLikes;
  if(this.lastNum>this.preNum){this.preNum=this.lastNum}
}
return this.preNum
}

 constructor() { }

  ngOnInit() {
  }

}
