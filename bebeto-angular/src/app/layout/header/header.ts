import { Component, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class HeaderComponent implements OnInit {
  activeSection = signal('home');
  isMenuOpen = signal(false);

  ngOnInit() {
    this.observeSections();
  }

  toggleMenu() {
    this.isMenuOpen.update(v => !v);
  }

  scrollTo(id: string) {
    let targetId = id;
    if (id === 'about') targetId = 'experience';
    if (id === 'resume') targetId = 'why-hire-me';
    // contact stays as contact
    const el = document.getElementById(targetId);
    if (el) {
      this.isMenuOpen.set(false);
      const offset = 100;
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  private observeSections() {
    const options = { threshold: 0.5 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) this.activeSection.set(entry.target.id);
      });
    }, options);

    ['home', 'experience', 'services', 'why-hire-me', 'portfolio', 'contact', 'footer'].forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }
}