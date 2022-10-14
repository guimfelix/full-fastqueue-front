import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenStorageService } from './services/token-storage.service';
import { EventBusService } from './shared/event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showProdutorBoard = false;
  showEspectadorBoard = false;
  username?: string;

  eventBusSub?: Subscription;

  constructor(private tokenStorageService: TokenStorageService, private eventBusService: EventBusService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('PAPEL_ADMIN');
      this.showProdutorBoard = this.roles.includes('PAPEL_PRODUTOR');
      this.showEspectadorBoard = this.roles.includes('PAPEL_ESPECTADOR');

      this.username = user.username;
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  ngOnDestroy(): void {
    if (this.eventBusSub) {
      this.eventBusSub.unsubscribe();
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();

    this.isLoggedIn = false;
    this.roles = [];
    this.showAdminBoard = false;
    this.showProdutorBoard = false;
    this.showEspectadorBoard = false;
  }
}
