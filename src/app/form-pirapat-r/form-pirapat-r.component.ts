import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray,FormControl } from '@angular/forms';


@Component({
  selector: 'app-form-pirapat-r',
  templateUrl: './form-pirapat-r.component.html',
  styleUrls: ['./form-pirapat-r.component.css']
})
export class FormPirapatRComponent implements OnInit {
  //reactiveForm 1
  infoData: FormGroup;
  //ReactiveForm 2
  infoData2: FormGroup;
  //ReactiveForm 3
  infoData3: FormGroup;
  get FormArrayInfoData3(): FormArray{
    return this.infoData3.get('FormArrayInfoData3') as FormArray
  }

  myForm!: FormGroup
  get subjects(): FormArray {
    return this.myForm.get('subjects') as FormArray
  }


  constructor(private fb:FormBuilder) {
    this.infoData = this.fb.group({
      //  FormControlsName ที่ รับตัวแปลมาจาก FormGroup
      Firstname:'',
      Lastname:'',
      email:'',
      Number:'',
      year:'',
    });
    this.infoData2 = this.fb.group({
      F:'',
      L:'',
      // เก็บข้อมูล Array ซ้อน Array ที่ตัวแปล  *ngFor of FormArrayInfoData2  เป็น array ว่าง = []
      FormArrayInfoData2: this.fb.array([]),
    });
    this.infoData3 = this.fb.group({
      a:'',
      b:'',
      c:'',
      d:'',
      e:'',
      f:'',
      FormArrayInfoData3: this.fb.array([]),
    });
    this.myForm = this.fb.group({
      fristname: new FormControl(' '),
      lastname: new FormControl(' '),

      subjects: this.fb.array([

        /*        this.fb.group({subject_id: ''}),
                  this.fb.group({subject_id: ''}), */
        /*        this.fb.group({subject_id: 'blue'}), */
      ]),
    });
  }
  // FormArrayInfoData3() : FormArray{
  //   return  this.infoData3.get("FormArrayInfoData3") as FormArray
  // }
  //จาก *ngFor กำหนดตัวแปล FormArrayInfoData2.control ให้เป็น array และเรียกค่ากลับใน infoData2 พร้อมส่งค่าเข้า FormArrayInfoData2
  FormArrayInfoData2() : FormArray{
    //  return ค่ากลับมาเก็บ ใน FormGroup And
    return this.infoData2.get("FormArrayInfoData2") as FormArray
  }
  NewFormArrayInfoData3(): FormGroup{
    return this.fb.group({
      f:'',
      g:'',
      subject_id:'',
    });
  }
  //  สร้าง method ใหม่เพื่อเก็บค่าเป็น FormGroup
  NewFormArrayInfoData2(): FormGroup{
    return this.fb.group({
      // FormControlName
      nickname:'',
      changenickname:'',
    });
  }
  AddInfoData3(){
    this.FormArrayInfoData3.push(this.NewFormArrayInfoData3());
  }
  // method ปุ่ม Add infoData2
  AddInfoData2(){
    this.FormArrayInfoData2().push(this.NewFormArrayInfoData2());
  }
  //ปุ่ม SubmitInfoData ใน ReactiveForm 1
  SubmitInfoData(){
    // method SubmitInfoData() หลังจากกดแล้วจะทำการ log ค่า InfoData = ข้อมูลที่กรอกในFormGroup
    console.log(this.infoData.value);
  }
  RemoveAddInfoData3(i:number){
    this.FormArrayInfoData3.removeAt(i);
  }
  //ปุ่ม RemoveAddInfoData2 ใน ReactiveForm 2
  RemoveAddInfoData2(i:number){
    this.FormArrayInfoData2().removeAt(i);
  }
  SubmitAddInfoData2(){
    console.log(this.infoData2.value);
  }
  SubmitAddInfoData3(){
    console.log(this.infoData3.value);
}
  ResetForm(){
    this.infoData3.reset()
    this.FormArrayInfoData3.clear()
  }

  removesubject(index: number) {
    this.subjects.removeAt(index)
  }

  addsubject() {
    this.subjects.push(this.fb.group({subject_id: ''}))
  }

  reset(){
    this.myForm.reset();
    this.subjects.clear();
  }

  submitname(){
    console.log(`ข้อมูล`,this.myForm.value)
  }
  ngOnInit(): void {}

}
