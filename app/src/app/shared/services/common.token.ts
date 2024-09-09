import { inject, Injectable } from "@angular/core";
import { CookieService } from 'ngx-cookie-service';
import { CONSTANTS } from "../constants/common.constants";
import { User } from "../models/common.models";
import { PlainObject } from "../interfaces/common.interfaces";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private _cookieService = inject(CookieService);

  setToken(value: string): void {
    this._cookieService.set(CONSTANTS.TOKEN, value);
  }

  getToken(): string {
    return this._cookieService.get(CONSTANTS.TOKEN);
  }

  clearToken(): void {
    this._cookieService.delete(CONSTANTS.TOKEN);
  }

  getUserInfo(): User {
    var token = this.getToken();
    return this.deserialize<User>(token, User);
  }

  getAccessToken(): string {
    var token = this.getToken();
    if (token) {
      return this.deserialize<User>(token, User).token;
    }
    return CONSTANTS.EMPTY;
  }

  private deserialize<T>(json: string, classType: new () => T): T {
    let parsedData = JSON.parse(json);
    let instance = new classType();
    let instanceAsObject = instance as PlainObject;

    // Use type assertion to ensure TypeScript knows instance is an object
    Object.keys(parsedData).forEach(key => {
      if (key in instanceAsObject) {
        (instance as any)[key] = parsedData[key];
      }
    });

    return instance;
  }

  // private deserializeUser(json: string): User {
  //   const parsedData = JSON.parse(json);
  //   const user = new User();

  //   user.id = parsedData.id;
  //   user.userName = parsedData.userName;
  //   user.email = parsedData.email;

  //   return user;
  // }
}