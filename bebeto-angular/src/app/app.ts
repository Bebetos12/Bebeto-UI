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
    this.initScrollProgress();
    this.initMagneticCursor();
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

    // Observe all elements with animation classes
    setTimeout(() => {
      const animationElements = document.querySelectorAll(
        '.fade-in-left, .fade-in-right, .fade-in-up, .fade-in-down, .fade-in-scale, .slide-in-left, .slide-in-right, .stagger-children'
      );
      animationElements.forEach(el => observer.observe(el));
    }, 100);
  }

  private initScrollProgress() {
    const progressBar = document.querySelector('.scroll-progress-bar') as HTMLElement;
    const fab = document.getElementById('backToTop') as HTMLElement;

    const updateUI = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (progressBar) {
        progressBar.style.width = scrollPercent + '%';
      }

      // Show/hide FAB based on scroll position
      if (fab) {
        if (scrollTop > 300) {
          fab.classList.add('show');
        } else {
          fab.classList.remove('show');
        }
      }
    };

    // Update on scroll
    window.addEventListener('scroll', updateUI, { passive: true });

    // Initial update
    updateUI();
  }

  private initMagneticCursor() {
    const cursor = document.querySelector('.cursor') as HTMLElement;
    const cursorDot = document.querySelector('.cursor-dot') as HTMLElement;
    const cursorOutline = document.querySelector('.cursor-outline') as HTMLElement;

    if (!cursor || !cursorDot || !cursorOutline) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // Smooth cursor following
    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.1;
      cursorY += (mouseY - cursorY) * 0.1;

      cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
      cursorDot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;

      requestAnimationFrame(updateCursor);
    };

    document.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });

    // Magnetic effect on interactive elements
    const magneticElements = document.querySelectorAll('button, a, .portfolio-card, .skill-item, .fab');

    magneticElements.forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
      });

      el.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    });

    updateCursor();
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
