import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitoyenDetailsComponent } from './citoyen-details.component';

describe('CitoyenDetailsComponent', () => {
  let component: CitoyenDetailsComponent;
  let fixture: ComponentFixture<CitoyenDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitoyenDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitoyenDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
