import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';
import { CONSTANTS } from '../shared/constants/common.constants';
import { User, LoginUserCommand } from '../shared/models/common.models';
import { DelayErrorDirective } from '../shared/directives/delay-error.directive';
import { HttpService } from '../shared/services/common.http';
import { TokenService } from '../shared/services/common.token';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, DelayErrorDirective],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private _router = inject(Router);
  private _httpService = inject(HttpService);
  private _tokenService = inject(TokenService);
  private _popup = inject(ToastrService);

  constants = CONSTANTS;
  isLoading!: boolean;
  user!: User;

  ngOnInit(): void {
    this.init();
  }

  onLogin(): void {
    this.disableLogin();

    if (this.user.userName) {
      this.login();
    }
  }

  private login(): void {
    let url = `${environment.apiUrl}/dev/users/login`;
    let command = new LoginUserCommand(this.user.userName);
    this._httpService.post<LoginUserCommand, User>(url, command).subscribe({
      next: response => {
        this.handleLoginSuccess(response);
        this.enableLogin();
      },
      error: error => {
        this.handleLoginFail(error);
        this.enableLogin();
      }
    });
  }

  private handleLoginSuccess(user: User): void {
    // This is just a simple version of the token, should implement a identity-service to get access-token
    this._tokenService.setToken(JSON.stringify(user));
    this._router.navigate([CONSTANTS.ROUTE_HOME]);
  }

  private handleLoginFail(error: HttpErrorResponse): void {
    if (error.status === CONSTANTS.ERROR_NOTFOUND_STATUS_CODE) {
      this._popup.error(CONSTANTS.RESPONSE_USER_NOT_FOUND);
    }
  }

  private disableLogin(): void {
    this.isLoading = true;
  }

  private enableLogin(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  private init(): void {
    this.isLoading = false;
    this.user = { id: CONSTANTS.EMPTY, userName: CONSTANTS.EMAIL, token: CONSTANTS.EMPTY };
  }
}