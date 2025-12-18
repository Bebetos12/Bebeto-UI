import { Component } from '@angular/core';

@Component({
  selector: 'app-scrolling-banner',
  standalone: true,
  imports: [],
  templateUrl: './scrolling-banner.html',
  styleUrls: ['./scrolling-banner.scss']
})
export class ScrollingBannerComponent {
  // Banner items
  readonly bannerItems = [
    'UX Design', 'App Design', 'Dashboard', 'Wireframe', 'User Research'
  ];
}
