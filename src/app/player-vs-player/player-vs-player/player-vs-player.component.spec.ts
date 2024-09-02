import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerVsPlayerComponent } from './player-vs-player.component';

describe('PlayerVsPlayerComponent', () => {
  let component: PlayerVsPlayerComponent;
  let fixture: ComponentFixture<PlayerVsPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerVsPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayerVsPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
