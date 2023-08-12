import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfcubeComponent } from './pfcube.component';

describe('PfcubeComponent', () => {
  let component: PfcubeComponent;
  let fixture: ComponentFixture<PfcubeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PfcubeComponent]
    });
    fixture = TestBed.createComponent(PfcubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
