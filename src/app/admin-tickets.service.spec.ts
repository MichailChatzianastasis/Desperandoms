import { TestBed, inject } from '@angular/core/testing';

import { AdminTicketsService } from './admin-tickets.service';

describe('AdminTicketsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminTicketsService]
    });
  });

  it('should be created', inject([AdminTicketsService], (service: AdminTicketsService) => {
    expect(service).toBeTruthy();
  }));
});
