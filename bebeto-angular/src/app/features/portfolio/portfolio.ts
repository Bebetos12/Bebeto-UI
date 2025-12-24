import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  link: string;
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class PortfolioComponent {
  selectedProject = signal<Project | null>(null);

  readonly projects = signal<Project[]>([
    {
      id: 1,
      title: 'UI/UX Design',
      category: 'UI/UX',
      image: 'Assets/portofolio images/UIUX.jpg',
      description: 'A comprehensive UI/UX design project focusing on user-centered design principles and intuitive interfaces.',
      link: '#'
    },
    {
      id: 2,
      title: 'Web Development',
      category: 'Web Dev',
      image: 'Assets/portofolio images/web dev.jpg',
      description: 'Full-stack web development project utilizing modern frameworks and responsive design techniques.',
      link: '#'
    },
    {
      id: 3,
      title: 'Product Design',
      category: 'Product Design',
      image: 'Assets/portofolio images/product Design.jpg',
      description: 'Innovative product design showcasing functionality and aesthetic appeal.',
      link: '#'
    },
    {
      id: 4,
      title: 'Landing Page',
      category: 'Landing Page',
      image: 'Assets/portofolio images/landing page.jpg',
      description: 'High-converting landing page design with engaging visuals and clear calls to action.',
      link: '#'
    },
    {
      id: 5,
      title: 'Glassmorphism UI',
      category: 'Glassmorphism',
      image: 'Assets/portofolio images/glassmorphism.jpg',
      description: 'Modern user interface design featuring the trendy glassmorphism effect.',
      link: '#'
    },
    {
      id: 6,
      title: 'Interactive Cards',
      category: 'Cards',
      image: 'Assets/portofolio images/cards.jpg',
      description: 'Set of interactive and animated cards for displaying content dynamically.',
      link: '#'
    },
    {
      id: 7,
      title: 'Motion Graphics',
      category: 'Animation',
      image: 'Assets/portofolio images/Animation.jpg',
      description: 'Engaging motion graphics and animations to enhance user experience.',
      link: '#'
    }
  ]);

  readonly showAll = signal(false);

  get visibleProjects() {
    return this.showAll() ? this.projects() : this.projects().slice(0, 3);
  }

  toggleSeeAll() {
    this.showAll.update(value => !value);
  }

  openProject(project: Project) {
    this.selectedProject.set(project);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  closeProject() {
    this.selectedProject.set(null);
    document.body.style.overflow = ''; // Restore scrolling
  }
}