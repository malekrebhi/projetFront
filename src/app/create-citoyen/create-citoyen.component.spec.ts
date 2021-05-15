import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCitoyenComponent } from './create-citoyen.component';

describe('CreateCitoyenComponent', () => {
  let component: CreateCitoyenComponent;
  let fixture: ComponentFixture<CreateCitoyenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCitoyenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCitoyenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
