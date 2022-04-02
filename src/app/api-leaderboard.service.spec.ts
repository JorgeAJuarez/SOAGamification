import { TestBed } from '@angular/core/testing';

import { ApiLeaderboardService } from './api-leaderboard.service';

describe('ApiLeaderboardService', () => {
  let service: ApiLeaderboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLeaderboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
