import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDSComponent } from './liste-ds.component';

describe('ListeDSComponent', () => {
  let component: ListeDSComponent;
  let fixture: ComponentFixture<ListeDSComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListeDSComponent]
    });
    fixture = TestBed.createComponent(ListeDSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
