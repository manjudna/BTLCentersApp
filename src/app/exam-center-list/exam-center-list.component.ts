import { Component,ViewChild, OnInit } from '@angular/core';
import { ExamcenterServiceService} from '../examcenter-service.service';
// import {ExamCenterDetail} from '../exam-center-detail';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material';
import {MatPaginator} from '@angular/material/paginator';




export class ExamCenterDetail {
  Id: number;
  Name: string;
  Code: string;  
  CountryName:string;
  OwnerName:string;
}




 

@Component({
  selector: 'app-exam-center-list',
  templateUrl: './exam-center-list.component.html',
  styleUrls: ['./exam-center-list.component.css']
})


export class ExamCenterListComponent implements OnInit {
  
  
  constructor(private service: ExamcenterServiceService) { }

  ExamCenterList: ExamCenterDetail[];
  MyList: any;


  ngOnInit() {
    
    

    this.service.GetCentersAny().subscribe(data=>{
      console.log(data);
      this.MyList= data;
 this.ExamCenterList=data;
 //ExamData = data;
     this.dataSource = new MatTableDataSource<ExamCenterDetail>(data);
 this.dataSource.paginator= this.paginator;
 this.dataSource.sort=this.sort;

});

    

   
  }
  

  title = 'material-demo';
  
  displayedColumns: string[] = ['Id','Name','Code','CountryName','OwnerName'];
  dataSource = new MatTableDataSource<ExamCenterDetail>(null);

  

   @ViewChild(MatSort,{static :true}) sort:MatSort;
   
   @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;



  applyFilter(filterValue: string)
  {
    this.dataSource.filter = filterValue.trim().toLowerCase();
     
  }
  
}
