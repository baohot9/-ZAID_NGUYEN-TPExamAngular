import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliqueComponent } from './mission-list.component';

describe('PubliqueComponent', () => {
  let component: PubliqueComponent;
  let fixture: ComponentFixture<PubliqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubliqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubliqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
