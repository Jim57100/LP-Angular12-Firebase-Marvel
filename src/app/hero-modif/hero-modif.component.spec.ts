import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroModifComponent } from './hero-modif.component';

describe('HeroModifComponent', () => {
  let component: HeroModifComponent;
  let fixture: ComponentFixture<HeroModifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroModifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroModifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
