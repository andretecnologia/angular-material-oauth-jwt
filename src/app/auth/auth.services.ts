import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { User } from '../core/model/user/user';
// import { Privilege } from '../privilege/privilege';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private jwtHelper: JwtHelperService;

  constructor( private http: HttpClient ) {
    this.jwtHelper = new JwtHelperService();
  }

  storeToken(token: string) {
    localStorage.setItem('token', `Bearer ${token}`);
  }

  // setPrivileges (privileges: Privilege[]) {
  //   const privilegeKeys = privileges.map(privilege => privilege.key);
  //   localStorage.setItem('privileges', privilegeKeys.toString());
  // }

  // hasPrivilege(privilege: string): boolean {
  //   const privileges = localStorage.getItem('privileges');
  //   return privileges.includes(privilege);
  // }

  get token() {
    return localStorage.getItem('token');
  }

  clearToken() {
    localStorage.removeItem('token');
    localStorage.removeItem('privileges');
  }

  isTokenExpired(): boolean {
    const token = localStorage.getItem('token');
    return this.jwtHelper.isTokenExpired(token);
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return Boolean(token);
  }

  login({ email, password }, callback?: (any?: any) => void, error?: (msg: string) => void) {
    const credentials = { email, password };
    this.http.post<any>(`http://localhost:4242/api/users/login`, credentials, { observe: 'response' }).subscribe(data => {
      // const token = data.headers.get('authorization');
      const token = data.body.token;
      //const privileges = data.body.profile.privileges;
      this.storeToken(token);
      //this.setPrivileges(privileges);
      if (callback) {
        callback(data.body);
      }
    }, e => {
      console.log(e);
      if (error) {
        if (e.status === 404) {
          error('Usuário ou senha incorretos');
        } else {
          error('Ocorreu um erro ao entrar, tente novamente');
        }
      }
    });
  }

}
