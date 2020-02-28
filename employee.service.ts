import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Employee } from './employee';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private _http : Http ) { }

  showEmployee() : Observable<Employee[]> {
    return this._http.get("http://localhost:8080/MLP189new/api/employees/").map((res : Response ) => res.json());
  }

  searchEmployee(empId : number) : Observable<Employee[]> {
    return this._http.get("http://localhost:8080/MLP189new/api/employees/" + empId).map((res : Response ) => res.json());
  }
}
