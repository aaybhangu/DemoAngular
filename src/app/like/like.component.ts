import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl:'./like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent{
 
  @Input('isLiked') isActive:boolean;
  @Input() likeCount:number;

  @Output() change = new EventEmitter;

  onLike(){
    console.log("Hello");
    this.likeCount += (this.isActive)?-1:1;
    this.isActive = !this.isActive;
    this.change.emit({
      isLiked:this.isActive,
      likeCount:this.likeCount
    });
  }
}

export interface LikeChangedEventObj{
  isLiked:boolean;
  likeCount:number;
}

