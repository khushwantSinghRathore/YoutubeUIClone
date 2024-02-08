import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShortsPage } from './shorts.page';

describe('ShortsPage', () => {
  let component: ShortsPage;
  let fixture: ComponentFixture<ShortsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShortsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
