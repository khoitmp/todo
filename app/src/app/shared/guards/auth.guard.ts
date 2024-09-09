import { Injectable, inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { CONSTANTS } from "../constants/common.constants";
import { TokenService } from "../services/common.token";

@Injectable({
  providedIn: 'root'
})
class AuthGuardService {
  private _router = inject(Router);
  private _tokenService = inject(TokenService);

  canActivate(): boolean {
    var token = this._tokenService.getToken();

    if (!token) {
      console.log('Authentication required!');
      this._router.navigate([CONSTANTS.ROUTE_LOGIN]);
      return false;
    }

    return true;
  }
}

export const AuthGuard: CanActivateFn = (): boolean => {
  return inject(AuthGuardService).canActivate();
}