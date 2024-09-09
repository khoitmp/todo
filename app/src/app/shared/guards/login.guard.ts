import { Injectable, inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { CONSTANTS } from "../constants/common.constants";
import { TokenService } from "../services/common.token";

@Injectable({
  providedIn: 'root'
})
class LoginGuardService {
  private _router = inject(Router);
  private _tokenService = inject(TokenService);

  canActivate(): boolean {
    var token = this._tokenService.getToken();

    if (token) {
      this._router.navigate([CONSTANTS.ROUTE_HOME]);
      return false;
    }

    return true;
  }
}

export const LoginGuard: CanActivateFn = (): boolean => {
  return inject(LoginGuardService).canActivate();
}