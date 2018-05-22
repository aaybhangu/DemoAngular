import { Component, OnInit } from '@angular/core';
import {CoursesService}from'../courses.service';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title = "My Course";
  courses;
  imageUrl = "";
  _active =true;
  constructor(service: CoursesService) {
    //let service = new CoursesService();
    this.courses = service.getCourses();


   }
  
   onSave(){
     console.log("Button Got clicked");
   }
    onActive(){
      this._active=!this._active?true:false;
      console.log(''+this._active);
    }

  ngOnInit() {
  }
  
}
