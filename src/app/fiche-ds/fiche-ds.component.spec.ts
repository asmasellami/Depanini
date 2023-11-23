import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheDSComponent } from './fiche-ds.component';

describe('FicheDSComponent', () => {
  let component: FicheDSComponent;
  let fixture: ComponentFixture<FicheDSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FicheDSComponent]
    });
    fixture = TestBed.createComponent(FicheDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
