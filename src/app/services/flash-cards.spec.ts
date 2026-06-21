import { TestBed } from '@angular/core/testing';

import { FlashCards } from './flash-cards';

describe('FlashCards', () => {
  let service: FlashCards;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlashCards);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
