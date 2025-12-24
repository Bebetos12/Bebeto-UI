import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  onSubmit() {
    if (this.formData.name && this.formData.email && this.formData.subject && this.formData.message) {
      // For now, just log the data. In a real app, send to backend
      console.log('Form submitted:', this.formData);
      alert('Thank you for your message! I will get back to you soon.');
      // Reset form
      this.formData = { name: '', email: '', subject: '', message: '' };
    }
  }
}
