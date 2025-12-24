import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header';
import { HeroComponent } from './features/hero/hero';
import { ServicesComponent } from './features/services/services';
import { ExperienceComponent } from './features/experience/experience';
import { WhyHireMeComponent } from './features/why-hire-me/why-hire-me';
import { PortfolioComponent } from './features/portfolio/portfolio';
import { TestimonialsComponent } from './features/testimonials/testimonials';
import { CtaComponent } from './features/cta/cta';
import { ScrollingBannerComponent } from './features/scrolling-banner/scrolling-banner';
import { BlogComponent } from './features/blog/blog';
import { Contact } from './features/contact/contact';
import { FooterComponent } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    ServicesComponent,
    ExperienceComponent,
    WhyHireMeComponent,
    PortfolioComponent,
    TestimonialsComponent,
    CtaComponent,
    ScrollingBannerComponent,
    BlogComponent,
    Contact,
    FooterComponent
  ],
  templateUrl: './app.html'
})
export class App implements OnInit {
  // Complete Bebeto Portfolio - Angular 20 with Modern Architecture

  ngOnInit() {
    this.initScrollAnimations();
  }

  private initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with fade-in class
    setTimeout(() => {
      const fadeElements = document.querySelectorAll('.fade-in');
      fadeElements.forEach(el => observer.observe(el));
    }, 100);
  }
}
