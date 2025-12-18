import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent {
  // Asset paths (will be copied to public folder)
  // Use the requested hero image from `public/Assets`
  // readonly heroImagePath = 'Assets/hire-me.png';
  // readonly backgroundImagePath = '/Assets/background.png';

  // Portfolio link action
  viewPortfolio() {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Hire me action
  contactMe() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
