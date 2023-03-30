import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTwowayComponent } from './test-twoway.component';

describe('TestTwowayComponent', () => {
  let component: TestTwowayComponent;
  let fixture: ComponentFixture<TestTwowayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTwowayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTwowayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
