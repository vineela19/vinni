import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-admin-portal',
  templateUrl: './admin-portal.component.html',
  styleUrls: ['./admin-portal.component.css']
})
export class AdminPortalComponent implements OnInit {

  userData=[];
    
  constructor(private service:CovidService) {
   }

  ngOnInit(): void {
    this.service.getAllUserData().subscribe( 
      data => {
        this.userData=data;
        console.log("Success", data);
      },
      error => {
        console.error("Error", error)
      })
  }

  update(){
   console.log(this.userData.values);
  }


}
