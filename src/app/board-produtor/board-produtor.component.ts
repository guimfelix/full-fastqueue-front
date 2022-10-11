import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { EventBusService } from '../shared/event-bus.service';
import { EventData } from '../shared/event.class';

@Component({
  selector: 'app-board-produtor',
  templateUrl: './board-produtor.component.html',
  styleUrls: ['./board-produtor.component.css']
})
export class BoardProdutorComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService, private eventBusService: EventBusService) { }

  ngOnInit(): void {
    this.userService.getProdutorBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = err.error.message || err.error || err.message;

        if (err.status === 403)
          this.eventBusService.emit(new EventData('logout', null));
      }
    );
  }
}
