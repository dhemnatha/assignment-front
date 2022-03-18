import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';

const AUTH_STATUS = 'auth-status';

@Injectable({
  providedIn: 'root',
})
export class TokenStoreService {
  constructor() {}

  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public getUserAuthStatus(): any {
    const user = window.sessionStorage.getItem(AUTH_STATUS);
    if (user) {
      return JSON.parse(user) !== 'null' ? true : false;
    }
    return {};
  }

  public saveToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public saveUserAuthStatus(status: string): void {
    window.sessionStorage.removeItem(AUTH_STATUS);
    window.sessionStorage.setItem(AUTH_STATUS, status);
  }

  signOut(): void {
    window.sessionStorage.clear();
  }
}
