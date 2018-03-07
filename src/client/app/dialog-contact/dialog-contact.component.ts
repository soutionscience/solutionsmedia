import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-dialog-contact',
  templateUrl: './dialog-contact.component.html',
  styleUrls: ['./dialog-contact.component.scss']
})
export class DialogContactComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder, private api: ApiService) { this.createForm()}

  ngOnInit() {}
  createForm(){
    this.myForm = this.fb.group({
      name: '',
      company: '',
      tel: '',
      email: '',
      message: '',
      product: ''
    })
  }
 onSubmit(){
   console.log('submiting');
   this.api.postResource('messages', this.myForm.value);
   this.myForm.reset();

 }

}
