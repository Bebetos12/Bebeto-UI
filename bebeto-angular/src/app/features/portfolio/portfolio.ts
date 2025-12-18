import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class PortfolioComponent {
  readonly portfolioItems = signal([
    {
      id: 1,
      title: 'UI/UX',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=1000',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim.'
    },
    {
      id: 2,
      title: 'Web DEV',
      image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Sed lobortis orci elementum egestas.'
    }
  ]);

  readonly filterCategories = [
    'Landing Page', 'Product Design', 'Animation', 'Glassmorphism', 'Cards'
  ];

  seeAllProjects() {
    console.log('Navigate to portfolio');
  }
}