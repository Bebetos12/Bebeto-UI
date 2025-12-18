import { Component, signal, effect } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent {
  // Signal for active navigation section
  private _activeSection = signal('home');

  // Scroll effect to update active navigation
  constructor() {
    effect(() => {
      this.updateActiveSection();

      const handleScroll = () => this.updateActiveSection();
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    });
  }

  private updateActiveSection() {
    const sections = ['home', 'about', 'services', 'resume', 'portfolio', 'contact'];
    let active = 'home';

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          active = section;
          break;
        }
      }
    }

    this._activeSection.set(active);
  }

  // Method to scroll to section
  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      this._activeSection.set(sectionId);
    }
  }

  // Getter for template binding
  get activeSection() {
    return this._activeSection();
  }
}
