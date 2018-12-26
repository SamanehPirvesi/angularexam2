import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupFormComponent } from 'signup-form/signup-form.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { NewCourseFormComponent } from './new-course-form/new-course-form.component';
import { HttpClientModule } from '@angular/common/http' ;
import { PostsComponent } from './posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    NewCourseFormComponent,
    PostsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

