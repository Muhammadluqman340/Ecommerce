import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E404ErorrComponent } from './e404-erorr.component';

describe('E404ErorrComponent', () => {
  let component: E404ErorrComponent;
  let fixture: ComponentFixture<E404ErorrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E404ErorrComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E404ErorrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
