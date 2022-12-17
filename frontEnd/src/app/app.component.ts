import { Component } from '@angular/core';
import { mcq } from './mcq';
import { FormBuilder, FormArray } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  questionArr:any = [
    {question:"What", ans:"A"},
    {question:"Why", ans:"B"},
  ] 
  constructor(private fb: FormBuilder) { }
  userForm = this.fb.group({
    question: this.fb.array([])
  });

  get question(): FormArray {
		return this.userForm.get('question') as FormArray;
	}
  ngOnInit(): void {
    console.log(mcq)
    this.question.patchValue([
      this.questionArr
    ])
    console.log(this.question)
  }
  title = 'frontEnd';
}
