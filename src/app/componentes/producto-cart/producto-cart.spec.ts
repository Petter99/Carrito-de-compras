import { TestBed } from '@angular/core/testing';
import { Cart } from './producto-cart';

describe('Cart', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cart]
    }).compileComponents();
  });

  it('crea componente', () => {
    const fixture = TestBed.createComponent(Cart);
    const comp = fixture.componentInstance;
    expect(comp).toBeTruthy();
  });
});
