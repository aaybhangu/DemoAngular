import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'directiveExp',
  templateUrl: './directive-exp.component.html',
  styleUrls: ['./directive-exp.component.css']
})
export class DirectiveExpComponent {
  viewMode= 'map';
  courses; 
  isFavorite;
  onAdd(){
    this.courses.push({id:6, name:'course6'});
  }
  onRemove(Course){
    let index = this.courses.indexOf(Course);
    this.courses.splice(index,1);
  }

  onChange(Course){
    Course.name = 'English';
  }

  loadCourses(){
    this.courses=[
      {id:1, name:'course1'},
      {id:2, name:'course2'},
      {id:3, name:'course3'},
      {id:4, name:'course4'},
      {id:5, name:'course5'}
    ];
  }
  trackCourse(index, course){
    return course ? course.id:undefined;
  }

  onClick(){
    this.isFavorite = !this.isFavorite;
  }
}
