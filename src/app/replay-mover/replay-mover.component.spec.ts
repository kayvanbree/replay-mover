import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplayMoverComponent } from './replay-mover.component';

describe('ReplayMoverComponent', () => {
  let component: ReplayMoverComponent;
  let fixture: ComponentFixture<ReplayMoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReplayMoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplayMoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
