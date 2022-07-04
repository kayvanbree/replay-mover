import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayMover2Component } from './replay-mover2.component';

describe('ReplayMover2Component', () => {
  let component: ReplayMover2Component;
  let fixture: ComponentFixture<ReplayMover2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplayMover2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplayMover2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
