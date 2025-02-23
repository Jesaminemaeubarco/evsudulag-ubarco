import { Injectable } from '@angular/core';
import { UserModel } from '../model/UserModel';
import { UserDetail } from '../mock/UserDetail';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private currentUser: UserModel | null = null;

  validateLogin(username: string, password: string) : boolean {
    const user = UserDetail.find(u => u.username === username && u.password === password);

    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }
  
  getCurentUser() : UserModel | null {
    return this.currentUser;
  }
}
