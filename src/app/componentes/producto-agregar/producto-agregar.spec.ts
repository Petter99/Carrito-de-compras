import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Agregar } from './producto-agregar';

describe('Agregar', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Agregar]
    }).compileComponents();
  });

  it('crea componente', () => {
    const fixture = TestBed.createComponent(Agregar);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});