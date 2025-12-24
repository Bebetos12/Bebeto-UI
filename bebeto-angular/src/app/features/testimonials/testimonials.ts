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
      avatar: '/Assets/testimonial-images/Babie.jpeg',
      name: 'Babie',
      role: 'Frontend dev',
      rating: 5.0,
      text: 'Working with this team has been an absolute pleasure. Their attention to detail and commitment to quality is unmatched in the industry.'
    },
    {
      avatar: '/Assets/testimonial-images/Bakame.jpeg',
      name: 'Bakame',
      role: 'Backend Dev',
      rating: 5.0,
      text: 'Exceptional backend architecture and robust solutions. The system performance has improved significantly since we started working together.'
    },
    {
      avatar: '/Assets/testimonial-images/Darcy.jpeg',
      name: 'Darcy',
      role: 'User Supporter',
      rating: 5.0,
      text: 'The user support and communication have been outstanding. Every issue was resolved quickly and professionally.'
    },
    {
      avatar: '/Assets/testimonial-images/Samandari.jpeg',
      name: 'Samadari',
      role: 'Full-stack developper',
      rating: 5.0,
      text: 'A true full-stack expert who understands both the visual and functional aspects of development. Highly recommended.'
    },
    {
      avatar: '/Assets/testimonial-images/Vazquez Rugwe.jpeg',
      name: 'Vazquez',
      role: 'Full stack developper',
      rating: 5.0,
      text: 'Incredible technical skills and a great eye for design. The project was delivered on time and exceeded all our expectations.'
    },
    {
      avatar: '/Assets/testimonial-images/βȺɀȺ•ƓටᎠ.jpeg',
      name: 'βȺɀȺ•ƓටᎠ',
      role: 'Frontend web dev',
      rating: 5.0,
      text: 'One of the best frontend developers I have had the pleasure of working with. The UI is responsive, accessible, and beautiful.'
    }
  ]);
}