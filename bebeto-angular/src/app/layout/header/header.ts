import { Component, signal, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {
  activeSection = signal('home');
  isMenuOpen = signal(false);

  private observer: IntersectionObserver | null = null;

  ngOnInit() {
    this.initScrollObserver();
  }

  ngOnDestroy() {
    if (this.observer) this.observer.disconnect();
  }

  private initScrollObserver() {
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // More precise: triggers when section is exactly in the middle
      threshold: 0
    };

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection.set(entry.target.id);
        }
      });
    }, options);

    ['home', 'about', 'services', 'resume', 'portfolio', 'contact'].forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer?.observe(el);
    });
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      this.isMenuOpen.set(false); // Close menu on mobile
      
      const yOffset = -100; // Account for the sticky header height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      
      this.activeSection.set(sectionId);
    }
  }
}