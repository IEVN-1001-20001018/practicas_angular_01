import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplicacionAxbComponent } from './multiplicacion-axb.component';

describe('MultiplicacionAxbComponent', () => {
  let component: MultiplicacionAxbComponent;
  let fixture: ComponentFixture<MultiplicacionAxbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MultiplicacionAxbComponent]
    });
    fixture = TestBed.createComponent(MultiplicacionAxbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
