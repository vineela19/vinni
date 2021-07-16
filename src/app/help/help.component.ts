import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CovidService } from '../covid.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {

  resources: FormGroup;
  showMsg: boolean=false;

  constructor( private formbuilder :FormBuilder,private service:CovidService) {
    this.resources = formbuilder.group({
      floatLabel: 'auto',
      medName: [""],
      quantity: [""],
      docName: [""],
      name: [""],
      mobNum: ["",[Validators.min(1000000000),Validators.max(9999999999)]],
      approval:[0]

    });
   }

  ngOnInit(): void {
  }

  save(){
    console.log(this.resources.value);
    this.service.addData(this.resources.value).subscribe(
      data => {
        console.log("Success", data)
        this.showMsg=true;
      },
      error => {
        console.error("Error", error)
      })
    this.resources.reset();
  }

}
