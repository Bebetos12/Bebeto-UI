import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.html',
  styleUrls: ['./blog.scss']
})
export class BlogComponent {
  // Blog posts data
  readonly posts = [
    {
      image: 'Assets/for blog shapes image/Rectangle 6.png',
      category: 'UI/UX Design',
      author: 'Bebeto NIYERA', // Changed author name
      date: '10 Nov, 2024',
      title: 'Design Unraveled: Behind the Scenes of UI/UX Magic'
    },
    {
      image: 'Assets/for blog shapes image/Rectangle 6-1.png',
      category: 'Dashboard Design',
      author: 'Bebeto NIYERA', // Changed author name
      date: '09 Oct, 2024',
      title: 'Sugee: Loan Management System for Rural Sector.'
    },
    {
      image: 'Assets/for blog shapes image/Rectangle 6-2.png',
      category: 'Web Design',
      author: 'Bebeto NIYERA', // Changed author name
      date: '13 Aug, 2025',
      title: 'Cinetrade: Innovative way to invest in Digital Media'
    }
  ];

  seeAllPosts() {
    console.log('Navigate to all blog posts');
  }
}