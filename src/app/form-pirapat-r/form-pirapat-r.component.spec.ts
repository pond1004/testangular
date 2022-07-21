import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPirapatRComponent } from './form-pirapat-r.component';

describe('FormPirapatRComponent', () => {
  let component: FormPirapatRComponent;
  let fixture: ComponentFixture<FormPirapatRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPirapatRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPirapatRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
