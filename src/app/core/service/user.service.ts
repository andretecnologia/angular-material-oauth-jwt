import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../model/user/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user) {
    user.username = user.email;
    user.profileId = user.profileType;
    delete user.profileType;
    delete user.email;
    return this.http.post<User>(`${environment.apiBaseUrl}/api/users`, user);
  }

  filterUser(value){
    return this.http.get<User[]>(`${environment.apiBaseUrl}/api/users?value=${value}`);
  }

  getUserList() {
    return this.http.get<User[]>(`${environment.apiBaseUrl}/api/users`);
  }

  getUserListPaginator(page, pageSize){
    return this.http.get<User[]>(`${environment.apiBaseUrl}/api/users?page=${page}&size=${pageSize}`);

  }

  removeUser(userId: number) {
    return this.http.delete(`${environment.apiBaseUrl}/api/users/${userId}`);
  }

  getLoggedUser() {
    return this.http.get<User>(`${environment.apiBaseUrl}/api/users/data`);
  }

  getUser(userId: number | string) {
    return this.http.get<User>(`${environment.apiBaseUrl}/api/users/${userId}`);
  }

  editUser(user, userId: number) {
    user.username = user.email;
    user.profileId = user.profileType;
    delete user.profileType;
    delete user.email;
    return this.http.put(`${environment.apiBaseUrl}/api/users/${userId}`, user);
  }

  editPassword(password){

    delete password.passwordConfirm;
    return this.http.patch(`${environment.apiBaseUrl}/api/users/password`,password);
  }

  updateProfile(profileId, userId){
    const data = { profileId, userId };
    return this.http.patch(`${environment.apiBaseUrl}/api/users/profile`, data);
  }
}
