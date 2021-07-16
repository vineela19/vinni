import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup ,FormControl} from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from './User';


@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http: HttpClient) { }

  form: FormGroup = new FormGroup({
    name: new FormControl(''),
    mobile: new FormControl(''),
    resource: new FormControl(''),
    quantity: new FormControl(''),
    doc: new FormControl(''),
    approval: new FormControl(0)
  });

  
  getAllData(): Observable<any> {  
    let url = 'https://api.covid19india.org/data.json'  
    return this.http.get(url).  
      pipe((response) => response  
      )  
  }  
  
  getStateData(): Observable<any> {  
    let url = 'https://api.covid19india.org/data.json'  
    return this.http.get(url).  
      pipe((response) => response  
      )  
  }  
  getAllUserData(): Observable<any> {
    let url = 'http://localhost:8000/api/getAll'
    return this.http.get(url).
    pipe((response) => response  
      )
  }

  addData(data: FormGroup): Observable<any>{
    let url='http://localhost:8000/api/createQuery/'
    return this.http.post<User>(url, data)
  }

  updateData(id: number, data :FormGroup): Observable<any> {
    let url = 'http://localhost:8000/api/updateUser'
    return this.http.put<User>(url + id, data)
  }
  
  }
