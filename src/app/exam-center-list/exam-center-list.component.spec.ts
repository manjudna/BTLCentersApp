import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamCenterListComponent } from './exam-center-list.component';

describe('ExamCenterListComponent', () => {
  let component: ExamCenterListComponent;
  let fixture: ComponentFixture<ExamCenterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamCenterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamCenterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
