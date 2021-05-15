import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitoyenListComponent } from './citoyen-list.component';

describe('CitoyenListComponent', () => {
  let component: CitoyenListComponent;
  let fixture: ComponentFixture<CitoyenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitoyenListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitoyenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
