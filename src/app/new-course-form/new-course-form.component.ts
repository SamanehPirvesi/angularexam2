import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';
import { checkAndUpdatePureExpressionDynamic } from '@angular/core/src/view/pure_expression';
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.scss']
})
export class NewCourseFormComponent  {
  form=new FormGroup({
    topics: new FormArray([])
  })
addTopic (topic : HTMLInputElement){
  this.topics.push(new FormControl(topic.value));
  topic.value=""
}
  get topics(){
    return this.form.get('topic') as FormArray;
  }
removeTopic(topic:FormControl){
  let index=this.topics.controls.indexOf(topic);
  this.topics.removeAt(index);
}  

}
