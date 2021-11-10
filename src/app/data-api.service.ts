import { Injectable } from '@angular/core';
import { from, of } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/internal/operators/map';

export interface UserData {
  [username: string]: string
}

@Injectable({
  providedIn: 'root'
})
export class DataAPIService {

  userdata: UserData = {
    Sean: 'Huang'
  }

  constructor(private http: HttpClient) { }

  auth(username: string, password: string) {
    return this.http.get('assets/userdata.json').pipe(
      map((data: any) => {
        if (data[username] === password){
          return true;
        }
        return false;
      })
    )
  }
}
