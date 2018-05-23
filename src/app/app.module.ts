import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CoursesComponent } from './courses/courses.component'; 
import { CoursesService } from './courses.service';
import { capitalizePipe } from './capitalize.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikeComponent } from './like/like.component';
import { DirectiveExpComponent } from './directive-exp/directive-exp.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    CoursesComponent,
    capitalizePipe,
    FavoriteComponent,
    LikeComponent,
    DirectiveExpComponent,
    ContactFormComponent,
    FormAssignmentComponent, 
    SignupFormComponent, NewCourseFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
