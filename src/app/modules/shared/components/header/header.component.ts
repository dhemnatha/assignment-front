import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStoreService } from '../../../auth/services/token-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private tokenStorage: TokenStoreService, public router: Router) {}

  ngOnInit(): void {}

  signOut() {
    this.tokenStorage.signOut();
  }
}
