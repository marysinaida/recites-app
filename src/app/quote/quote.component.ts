import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] =[
    new Quote( 1,'"Change the world by being yourself"','Author,upvote,downvote',new Date(2020,3,14)),
    new Quote(2,'"I don’t need it to be easy, I need it to be worth it. "','Author,upvote,downvote',new Date(2030,3,14)),
    new Quote(3,'"Reality is wrong, dreams are for real. "','Author,upvote,downvote',new Date(2019,2,14)),
    new Quote(4,'"May your choices reflect your hopes, not your fears."','Author,upvote,downvote',new Date(2019,6,9)),
    new Quote(5,'"Turn your wounds into wisdom. "','Author,upvote,downvote',new Date(2019,0,18)),
    new Quote(6,'"Happiness depends upon ourselves. "','Author,upvote,downvote',new Date(2019,7,9)),
  ];

  toggleDetails(index){
    this.quotes[index].showRecite = !this.quotes[index].showRecite;
  }
  completeQuote(isComplete,index){
    if(isComplete){
this.quotes.splice(index,1);
    }
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }



  constructor() { }

  ngOnInit() {
  }

}
