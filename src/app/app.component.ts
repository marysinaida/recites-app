import { Component } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quote';
  quotes:Quote [] =[
    {id:1,name:'"Change the world by being yourself"',recite:'Author,upvote,downvote'},
    {id:2,name:'"I don’t need it to be easy, I need it to be worth it. "',recite:'Author,upvote,downvote'},
    {id:3,name:'"Reality is wrong, dreams are for real. "',recite:'Author,upvote,downvote'},
    {id:4,name:'"May your choices reflect your hopes, not your fears."',recite:'Author,upvote,downvote'},
    {id:5,name:'"Turn your wounds into wisdom. "',recite:'Author,upvote,downvote'},
    {id:6,name:'"Happiness depends upon ourselves. "',recite:'Author,upvote,downvote'},
  ];
  
  }
