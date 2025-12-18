import { Component } from '@angular/core';
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
    FooterComponent
  ],
  templateUrl: './app.html'
})
export class App {
  // Complete Bebeto Portfolio - Angular 20 with Modern Architecture
}
