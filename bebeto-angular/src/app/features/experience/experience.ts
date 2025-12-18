import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent {
  // Experience data
  readonly experiences = [
    {
      type: 'education',
      place: 'EP&Secondary school, Bururi',
      date: 'Sep 2004- July 2016',
      title: 'Experience Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales'
    },
    {
      type: 'work',
      place: 'ETSKiremba-sud, Bururi',
      date: 'Sep 2017- July 2020',
      title: 'UI/UX Designer',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales'
    },
    {
      type: 'work',
      place: 'University Lac tanganyika',
      date: 'Jannuary 2022- jannuary 2024',
      title: 'Lead UX Designer',
      description: 'Duis lacus nunc, posuere in justo vulputate, bibendum sodales'
    }
  ];
}
