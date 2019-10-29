import { Component } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = 'yellow';
  title = 'quote';
  // quotes:Quote [] =[
  //   new Quote( 1,'"Change the world by being yourself"',new Date(2019,3,14)),
  //   new Quote(2,'"I don’t need it to be easy, I need it to be worth it. "','Author,upvote,downvote',new Date(2019,3,19)),
  //   new Quote(3,'"Reality is wrong, dreams are for real. "','Author,upvote,downvote',new Date(2019,2,14)),
  //   new Quote(4,'"May your choices reflect your hopes, not your fears."','Author,upvote,downvote',new Date(2019,6,9)),
  //   new Quote(5,'"Turn your wounds into wisdom. "','Author,upvote,downvote',new Date(2019,0,18)),
  //   new Quote(6,'"Happiness depends upon ourselves. "','Author,upvote,downvote',new Date(2019,7,9)),
  // ];
  
  }
