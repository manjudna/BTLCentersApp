import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';
import {MatFormFieldModule} from  '@angular/material';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from   '@angular/material';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {HttpClientModule} from "@angular/common/http"
import {ExamcenterServiceService} from './examcenter-service.service';
import { ExamCenterListComponent } from './exam-center-list/exam-center-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ExamCenterListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatTableModule,
    MatInputModule,
    MatSortModule,
    MatPaginatorModule,
    HttpClientModule
  ],
  providers: [ExamcenterServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
