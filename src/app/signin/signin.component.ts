import { HttpClient, HttpClientModule } from '@angular/common/http';  // Import HttpClientModule here
import { Component, Output, EventEmitter, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [NgIf, FormsModule, HttpClientModule],  // Add HttpClientModule to the imports array
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent {
  @Output() close = new EventEmitter<void>();
  phoneNumber: string = '';
  otp: string = '';
  otpStep: boolean = false;
  userName: string | null = null;
  private mockApiSendOtpUrl = 'https://6717d25cb910c6a6e02a246e.mockapi.io/sendotp';
  private mockApiVerifyOtpUrl = 'https://6717d25cb910c6a6e02a246e.mockapi.io/verifyotp';

  // Inject HttpClient directly (this method is now preferred for standalone components)
  private http = inject(HttpClient);

  closeSignin() {
    this.close.emit();
  }

  sendOtp() {
    if (this.phoneNumber) {
      this.http.post(this.mockApiSendOtpUrl, { phoneNumber: this.phoneNumber }).subscribe(
        (response) => {
          console.log(`OTP sent to ${this.phoneNumber}`);
          this.otpStep = true; // Move to the OTP input step
        },
        (error) => console.error('Error sending OTP', error)
      );
    }
  }
  

  verifyOtp() {
    if (this.otp) {
      this.userName = 'john_doe';
      this.http.post<{ success: boolean; userName: string }>(this.mockApiVerifyOtpUrl, { otp: this.otp }).subscribe(
        (response) => {
          alert(`Login successful! Welcome, ${this.userName}`);
        },
        (error) => console.error('Error verifying OTP', error)
      );
    }
  }
}

