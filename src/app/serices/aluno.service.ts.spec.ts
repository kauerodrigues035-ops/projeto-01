import { TestBed } from '@angular/core/testing';

import { AlunoServiceTs } from './aluno.service.ts';

describe('AlunoServiceTs', () => {
  let service: AlunoServiceTs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunoServiceTs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
