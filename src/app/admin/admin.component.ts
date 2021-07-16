import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  adminLogin: FormGroup;

  constructor(private formbuilder :FormBuilder,private router:Router) {
    this.adminLogin = formbuilder.group({
      username: [""],
      password: [""]
    });
   }
   ngOnInit(): void {
  }

  login(){
    console.log(this.adminLogin.value.username);
    if((this.adminLogin.value.username=='admin') && (this.adminLogin.value.password=='admin123#'))
    {
      this.router.navigateByUrl('/adminPortal');
    }
    this.adminLogin.reset();
  }


}
