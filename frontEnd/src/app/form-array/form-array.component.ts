import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  questionArr:any = [
    {id:1,question:"Choose color?", ans1:"A", ans2:"B"},
    {id:2,question:"Choose team?", ans1:"A", ans2:"B"},
    {id:3,question:"Who will win?", ans1:"A", ans2:"B"},
  ]
  skillsForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }
  skillData:any = [
    {skill:"angular", exp:1},
    {skill:"node js", exp:2}

  ]
  ngOnInit(): void {
    this.skillsForm = this.formBuilder.group({
      name: [""],
      skills: this.formBuilder.array([])
    })
    this.skillData.forEach((element:any) => {
      this.skills.push(this.newSkill());  
    });
    
    this.skills.patchValue(this.skillData)
    console.log(this.skills, 'skills')
  }
  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray
  }
  newSkill(): FormGroup {
    return this.formBuilder.group({
      skill: '',
      exp: '',
    })
  }
  addSkills() {
    this.skills.push(this.newSkill());
  }

  // removeSkill(i: number) {
  //   this.skills.removeAt(i);
  // }



  onSubmit() {
    console.log(this.skillsForm.value);
  }
 
}
 


