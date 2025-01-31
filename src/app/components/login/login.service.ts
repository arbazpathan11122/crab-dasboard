import { Injectable } from '@angular/core';
import { CustomHTTPService } from 'src/app/providers/custom-http.service';





@Injectable()
export class LoginService {


  constructor(private http: CustomHTTPService) { }

  login(userDetails) {
    return this.http.post('user/login', userDetails);
  }

  getData() {
    return this.http.post('admin/users', 1);

  }
  approveRestaurant(id) {
    return this.http.post('admin/approve', id);

  }
}
