import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyJobComponentComponent } from './apply-job-component.component';

describe('ApplyJobComponentComponent', () => {
  let component: ApplyJobComponentComponent;
  let fixture: ComponentFixture<ApplyJobComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplyJobComponentComponent]
    });
    fixture = TestBed.createComponent(ApplyJobComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
