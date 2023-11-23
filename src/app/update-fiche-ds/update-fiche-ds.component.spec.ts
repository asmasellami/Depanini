import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFicheDSComponent } from './update-fiche-ds.component';

describe('UpdateFicheDSComponent', () => {
  let component: UpdateFicheDSComponent;
  let fixture: ComponentFixture<UpdateFicheDSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateFicheDSComponent]
    });
    fixture = TestBed.createComponent(UpdateFicheDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
