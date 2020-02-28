import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { Leave } from './leave';

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor( private _http : Http) { }

    leaveHistory(empId : number , startDate : string, endDate : string) : Observable<Leave[]> {
      return this._http.get("http://localhost:8080/MLP189new/api/leaves/leaveHistory/" + empId + "/" + startDate + "/" + endDate).
      map((res : Response) => res.json());
    }

    applyleave(empId : number, startDate : string, endDate : string, leaveType : string, leaveReason : string ) : Observable<string> {
      return this._http.post("http://localhost:8080/MLP189new/api/leaves/applyleaveInsert/" + empId + "/" + startDate + "/" + endDate + "/" + leaveType + "/" + leaveReason,null).
      map((res : Response) => res.text());
    }

    pendingLeaves(empId : number) : Observable<Leave[]> {
      return this._http.get("http://localhost:8080/MLP189new/api/leaves/pending/" + empId).map((res : Response) => res.json());
    }

    approveDeny(empId : number, leaveId : number, managerComment : string, values : number) {
      return this._http.post("http://localhost:8080/MLP189new/api/leaves/ApproveDeny/" + empId + "/" + leaveId + "/" + managerComment + "/" + values + "/",null).
      map((res : Response) => res.text());
    }



   }
