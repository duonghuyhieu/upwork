import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyUpworkComponent } from './why-upwork.component';

describe('WhyUpworkComponent', () => {
  let component: WhyUpworkComponent;
  let fixture: ComponentFixture<WhyUpworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhyUpworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyUpworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
