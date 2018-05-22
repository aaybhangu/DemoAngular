import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
  
  getCourses(){
    return ["Course 1 ", "Course 2", "Course3"];
  }
  //constructor() { }


}
