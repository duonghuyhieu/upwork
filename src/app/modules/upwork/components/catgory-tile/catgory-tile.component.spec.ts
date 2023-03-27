import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatgoryTileComponent } from './catgory-tile.component';

describe('CatgoryTileComponent', () => {
  let component: CatgoryTileComponent;
  let fixture: ComponentFixture<CatgoryTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatgoryTileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatgoryTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
