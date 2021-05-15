import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCitoyenComponent } from './update-citoyen.component';

describe('UpdateCitoyenComponent', () => {
  let component: UpdateCitoyenComponent;
  let fixture: ComponentFixture<UpdateCitoyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCitoyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCitoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
