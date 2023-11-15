import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenubarComponent } from './main-menubar.component';

describe('MainMenubarComponent', () => {
  let component: MainMenubarComponent;
  let fixture: ComponentFixture<MainMenubarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMenubarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMenubarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
