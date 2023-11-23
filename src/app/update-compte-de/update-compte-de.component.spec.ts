import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompteDeComponent } from './update-compte-de.component';

describe('UpdateCompteDeComponent', () => {
  let component: UpdateCompteDeComponent;
  let fixture: ComponentFixture<UpdateCompteDeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCompteDeComponent]
    });
    fixture = TestBed.createComponent(UpdateCompteDeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
