import { Injectable } from '@angular/core';
import {ExamCenterDetail} from './exam-center-detail';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import {HttpParams} from  "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ExamcenterServiceService {

   
  readonly rootUrl="http://localhost:56241/api";

  list: ExamCenterDetail[];

  constructor(private http:HttpClient) { 


  }

  GetExamCenterDetails()
  {
    return this.http.get(this.rootUrl+'/ExamCenterDetails')
    .toPromise()
    .then(res=> this.list=res as ExamCenterDetail[]);
  }

  GetExamCenterDetailsAny():Observable<any>
  {
    return this.http.get(this.rootUrl+'/ExamCenterDetails')
    
  }

  GetCentersAny():Observable<any>
  {
    return this.http.get(this.rootUrl+'/Centers')
    
  }

  GetExamCenterDetailsWithParamAny(id:string):Observable<any>
  {
   
    //let params1 = new  HttpParams().set('id', id);

    
    return this.http.get(this.rootUrl+'/ExamCenterDetails/'+id)
    
  }



}
