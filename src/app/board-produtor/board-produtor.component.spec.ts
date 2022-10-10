import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardProdutorComponent } from './board-produtor.component';

describe('BoardProdutorComponent', () => {
  let component: BoardProdutorComponent;
  let fixture: ComponentFixture<BoardProdutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardProdutorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardProdutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
