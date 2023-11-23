import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCompteDSComponent } from './update-compte-ds.component';

describe('UpdateCompteDSComponent', () => {
  let component: UpdateCompteDSComponent;
  let fixture: ComponentFixture<UpdateCompteDSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateCompteDSComponent]
    });
    fixture = TestBed.createComponent(UpdateCompteDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
