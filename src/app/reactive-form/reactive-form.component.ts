import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormArray,FormControl } from '@angular/forms';
import {count} from "rxjs/operators";
// import Form ต่างๆมาใช่งาน จาก '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  // กำหนดตัวแปล FormGroup:A
  A: FormGroup;
  constructor(
    private FB : FormBuilder
  ) {
  //  กำหนด FormGroup:A = FormBuilder:FB
    this.A = this.FB.group({
    // กำหนดตัวแปล FormControlName ที่ี FormGroup รับมา
      fistname:'',
      lastname:'',
    });
  //  FormGroup:A .valueChanges.Subscribe ส่งค่าผ่าน console.log
    this.A.valueChanges.subscribe(console.log);
  }

  ngOnInit(): void {
  }
//  method B รับการกระทำจาก ปุ่ม Send Form-A
  B():void{
    console.log(this.A.value);
    // หลังจากกด method B จะทำการ console.log ค่า FormGroup.A
    }
  }
