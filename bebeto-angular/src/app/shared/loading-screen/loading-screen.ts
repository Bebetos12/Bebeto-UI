import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading-screen',
  imports: [CommonModule],
  templateUrl: './loading-screen.html',
  styleUrl: './loading-screen.scss',
})
export class LoadingScreen implements OnInit, OnDestroy {
  isLoaded = false;
  progress = 0;
  private intervalId: any;

  ngOnInit() {
    this.startLoading();
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private startLoading() {
    console.log('Loading screen started');

    // Simple approach: hide after 3 seconds
    setTimeout(() => {
      this.isLoaded = true;
      console.log('Loading screen hidden after timeout');
    }, 3000);
  }
}
