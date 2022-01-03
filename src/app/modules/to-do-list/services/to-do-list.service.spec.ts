/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ToDoListService } from './to-do-list.service';

describe('Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToDoListService],
    });
  });

  it('should ...', inject([ToDoListService], (service: ToDoListService) => {
    expect(service).toBeTruthy();
  }));
});
