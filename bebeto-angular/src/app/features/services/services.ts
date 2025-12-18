import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.html',
  styleUrls: ['./services.scss']
})
export class ServicesComponent {
  readonly services = [
    {
      title: 'UI/UX Design',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Web Design',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Landing Page',
      image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800'
    }
  ];
}