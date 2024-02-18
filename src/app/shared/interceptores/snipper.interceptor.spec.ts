import { TestBed } from '@angular/core/testing';

import { SnipperInterceptor } from './snipper.interceptor';

describe('SnipperInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SnipperInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SnipperInterceptor = TestBed.inject(SnipperInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
