import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SencuestaComponent } from './sencuesta.component';

describe('SencuestaComponent', () => {
  let component: SencuestaComponent;
  let fixture: ComponentFixture<SencuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SencuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SencuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
