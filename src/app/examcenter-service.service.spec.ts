import { TestBed } from '@angular/core/testing';

import { ExamcenterServiceService } from './examcenter-service.service';

describe('ExamcenterServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExamcenterServiceService = TestBed.get(ExamcenterServiceService);
    expect(service).toBeTruthy();
  });
});
