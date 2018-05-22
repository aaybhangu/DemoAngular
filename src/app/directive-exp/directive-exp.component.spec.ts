import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveExpComponent } from './directive-exp.component';

describe('DirectiveExpComponent', () => {
  let component: DirectiveExpComponent;
  let fixture: ComponentFixture<DirectiveExpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectiveExpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
