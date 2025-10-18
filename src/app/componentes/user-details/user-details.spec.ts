import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDatails } from './user-details';

describe('UserDatails', () => {
  let component: UserDatails;
  let fixture: ComponentFixture<UserDatails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDatails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDatails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
