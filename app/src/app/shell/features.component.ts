import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CONSTANTS } from '../shared/constants/common.constants';
import { TokenService } from '../shared/services/common.token';
import { User } from '../shared/models/common.models';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './features.component.html'
})
export class FeaturesComponent implements OnInit {
  private _router = inject(Router);
  private _tokenService = inject(TokenService);

  constants = CONSTANTS;
  user!: User;

  ngOnInit(): void {
    this.init();
  }

  onLogout() {
    this._tokenService.clearToken();
    this._router.navigate([CONSTANTS.ROUTE_LOGIN]);
  }

  private init(): void {
    this.user = this._tokenService.getUserInfo();
  }
}