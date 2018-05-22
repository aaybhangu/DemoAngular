import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'form-assignment',
  templateUrl: './form-assignment.component.html',
  styleUrls: ['./form-assignment.component.css']
})
export class FormAssignmentComponent {
categories=[
  {id:1,name:"Development"},
  {id:2,name:"Art"},
  {id:3,name:"Languages"}
];
}
