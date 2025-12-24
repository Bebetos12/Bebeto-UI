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

    // Wait for window load event and a minimum display time
    const minDisplayTime = 2000; // 2 seconds minimum
    const startTime = Date.now();

    const hideLoadingScreen = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minDisplayTime - elapsedTime);

      setTimeout(() => {
        this.isLoaded = true;
        console.log('Loading screen hidden');
      }, remainingTime);
    };

    // If window is already loaded, hide immediately after min time
    if (document.readyState === 'complete') {
      hideLoadingScreen();
    } else {
      // Wait for window load
      window.addEventListener('load', hideLoadingScreen);

      // Fallback: hide after 5 seconds max
      setTimeout(() => {
        if (!this.isLoaded) {
          this.isLoaded = true;
          console.log('Loading screen hidden after fallback timeout');
        }
      }, 5000);
    }
  }
}
