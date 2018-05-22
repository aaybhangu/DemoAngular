import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core'; 

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styles:[
    `
    .glyphicon{
      color:green;
    }
    `
  ],
  styleUrls: ['./favorite.component.css']
 // inputs: ['isFavorite']
})
export class FavoriteComponent {

  @Input('is-favorite') isFavorite:boolean;
  @Output() change = new EventEmitter();

  onClick(){
    this.isFavorite = !this.isFavorite;
    this.change.emit({newValue:this.isFavorite});
  }
}

export interface FavoriteChangedEventObj{
  newValue:boolean;
}
