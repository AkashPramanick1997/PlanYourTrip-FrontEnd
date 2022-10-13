import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPackComponent } from './user-pack.component';

describe('UserPackComponent', () => {
  let component: UserPackComponent;
  let fixture: ComponentFixture<UserPackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
