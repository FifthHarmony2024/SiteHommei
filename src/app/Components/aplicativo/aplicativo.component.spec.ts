import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicativoComponent } from './aplicativo.component';

describe('AplicativoComponent', () => {
  let component: AplicativoComponent;
  let fixture: ComponentFixture<AplicativoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AplicativoComponent]
    });
    fixture = TestBed.createComponent(AplicativoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
