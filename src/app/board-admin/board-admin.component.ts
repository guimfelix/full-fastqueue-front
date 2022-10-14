import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { EventBusService } from '../shared/event-bus.service';
import { EventData } from '../shared/event.class';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.css']
})
export class BoardAdminComponent implements OnInit {
  content?: string;

  constructor(private userService: UserService, private eventBusService: EventBusService) { }

  ngOnInit(): void {

  }
}
