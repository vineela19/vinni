import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import { ChildData, Data } from '../model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allData: Data[] | undefined;  
  totalData: Data;  
  selectedStateCode: string | undefined;  
  stateData: Data;  
  statewiseData: ChildData[] | undefined;
 
  
  
  constructor(private service: CovidService) { }  
  
  ngOnInit() {  
    this.getAllData();  
  }  
  
  getAllData() {  
    this.service.getAllData().subscribe(  
      response => {  
        this.allData = response.statewise;  
        this.totalData = this.allData.find(x => x.statecode == 'TT');  
        this.allData = this.allData.filter(x => x.statecode != 'TT' && x.statecode != 'UN');  
        this.getStateData();  
      }  
    )  
  }  
  
  getStateData() {  
    this.service.getStateData().subscribe(  
      response => {  
        this.statewiseData = response;  
      }  
    )  
  }  
  
  onStateSelected() {  
    this.stateData = this.allData.find(x => x.statecode == this.selectedStateCode)  ; 
  }  

  sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("myTable");
    switching = true;
    dir = "asc"; 
    while (switching) {
      switching = false;
      rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
  }
 } 
}