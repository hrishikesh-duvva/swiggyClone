import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs'; // Import 'of' for mock response
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://your-mockapi-endpoint/users'; // Replace with your MockAPI endpoint
  private isLoggedIn = false; 

  constructor(private http: HttpClient) { }

  login(credentials: any): Observable<any> {
    // Simulate successful login with phone number and OTP
    const user = { phoneNumber: credentials.phoneNumber, token: 'mock_token' };
    this.isLoggedIn = true;
    return of(user).pipe(
      tap(user => {
        localStorage.setItem('user', JSON.stringify(user));
      })
    );
  }

  logout() {
    this.isLoggedIn = false;
    localStorage.removeItem('user');
  }

  getIsLoggedIn(): boolean {
    return this.isLoggedIn;
  }
}