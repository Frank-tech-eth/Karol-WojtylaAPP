import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InterconsultasPage } from './interconsultas.page';

describe('InterconsultasPage', () => {
  let component: InterconsultasPage;
  let fixture: ComponentFixture<InterconsultasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InterconsultasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
