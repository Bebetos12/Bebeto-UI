import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  templateUrl: './testimonials.html',
  styleUrls: ['./testimonials.scss']
})
export class TestimonialsComponent {
  // Using a signal for the array
  readonly testimonials = signal([
    {
      avatar: 'Assets/testimonial-images/me.png',
      name: 'Bakame',
      role: 'UI Ux Designer',
      rating: 5.0,
      text: 'consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.'
    },
    {
      avatar: 'Assets/testimonial-images/me.png',
      name: 'Vazquez',
      role: 'UI Ux Designer',
      rating: 5.0,
      text: 'consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.'
    }
    // Add more items to fill the screen
  ]);
}