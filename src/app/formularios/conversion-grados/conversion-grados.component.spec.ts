import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionGradosComponent } from './conversion-grados.component';

describe('ConversionGradosComponent', () => {
  let component: ConversionGradosComponent;
  let fixture: ComponentFixture<ConversionGradosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConversionGradosComponent]
    });
    fixture = TestBed.createComponent(ConversionGradosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
