import { TestBed } from '@angular/core/testing';

import { ReqHandlerrInterceptor } from './req-handlerr.interceptor';

describe('ReqHandlerrInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ReqHandlerrInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ReqHandlerrInterceptor = TestBed.inject(ReqHandlerrInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
