import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cta.html',
  styleUrls: ['./cta.scss']
})
export class CtaComponent {
  // Email value
  private _email = '';

  // Getter/setter for email property access
  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  // Submit action
  sendInvite() {
    if (this.email.trim()) {
      console.log('Sending invite to:', this.email);
      this.email = ''; // Clear form
    }
  }

  // Scroll to contact
  contactMe() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
