import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnewComponent } from './onew.component';

describe('OnewComponent', () => {
  let component: OnewComponent;
  let fixture: ComponentFixture<OnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
