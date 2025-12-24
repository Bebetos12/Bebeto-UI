import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  // Track active tab for the sliding pill animation
  activeTab: 'portfolio' | 'hire' = 'portfolio';

  // Typewriter properties
  roles: string[] = ['Product Designer', 'Web Developer', 'UI/UX Designer'];
  currentRoleIndex = 0;
  displayText = '';
  isDeleting = false;
  typingSpeed = 90;
  deletingSpeed = 30;
  pauseTime = 1200;
  private timeoutId: any;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.typeWriter();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  setActiveTab(tab: 'portfolio' | 'hire') {
    this.activeTab = tab;
  }

  typeWriter() {
    const currentRole = this.roles[this.currentRoleIndex];
    
    if (this.isDeleting) {
      this.displayText = currentRole.substring(0, this.displayText.length - 1);
    } else {
      this.displayText = currentRole.substring(0, this.displayText.length + 1);
    }

    // Force change detection to ensure the view updates
    this.cdr.detectChanges();

    let typeSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.displayText === currentRole) {
      typeSpeed = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayText === '') {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      typeSpeed = 200;
    }

    this.timeoutId = setTimeout(() => this.typeWriter(), typeSpeed);
  }
}