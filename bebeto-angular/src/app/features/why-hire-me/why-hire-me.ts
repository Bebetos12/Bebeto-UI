import { Component, ElementRef, AfterViewInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-hire-me',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-hire-me.html',
  styleUrls: ['./why-hire-me.scss']
})
export class WhyHireMeComponent implements AfterViewInit {
  @ViewChild('skillsSection') skillsSection!: ElementRef;
  
  shown = false;

  readonly skills = [
    {
      name: 'Angular',
      desc: 'HTML, SCSS, TS',
      percent: 90,
      radius: 45
    },
    {
      name: 'JavaScript',
      desc: 'ES6+, DOM',
      percent: 85,
      radius: 45
    },
    {
      name: 'Graphic Design',
      desc: 'Ps, Ai, Figma',
      percent: 95,
      radius: 45
    },
    {
      name: 'Python/Django',
      desc: 'Beginner',
      percent: 30,
      radius: 45
    }
  ];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.shown = true;
          this.cdr.detectChanges(); // Trigger update to animate
          observer.disconnect(); // Animate only once
        }
      });
    }, { threshold: 0.2 });

    if (this.skillsSection) {
      observer.observe(this.skillsSection.nativeElement);
    }
  }

  hireMe() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  getCircumference(radius: number): number {
    return 2 * Math.PI * radius;
  }

  getDashOffset(radius: number, percent: number): number {
    const circumference = this.getCircumference(radius);
    if (!this.shown) return circumference; // Start completely hidden (offset = circumference)
    return circumference - (percent / 100) * circumference;
  }

  getAnimationDelay(index: number): string {
    return `${index * 0.2}s`;
  }
}