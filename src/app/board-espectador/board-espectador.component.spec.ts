import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardEspectadorComponent } from './board-espectador.component';

describe('BoardEspectadorComponent', () => {
  let component: BoardEspectadorComponent;
  let fixture: ComponentFixture<BoardEspectadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardEspectadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardEspectadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
