import { Component } from '@angular/core';

@Component({
  selector: 'app-why-hire-me',
  standalone: true,
  templateUrl: './why-hire-me.html',
  styleUrls: ['./why-hire-me.scss']
})
export class WhyHireMeComponent {
  readonly stats = [
    { number: '10+', label: 'Project Completed' },
    { number: '5+', label: 'Happy client' }
  ];

  // Make sure this image is the portrait of the person with a transparent background
  readonly imagePath = 'Assets/hire-me-portrait.png';

  hireMe() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}