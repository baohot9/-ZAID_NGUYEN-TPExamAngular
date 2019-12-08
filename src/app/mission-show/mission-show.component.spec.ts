import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMissionComponent } from './mission-show.component';

describe('ShowMissionComponent', () => {
  let component: ShowMissionComponent;
  let fixture: ComponentFixture<ShowMissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowMissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
