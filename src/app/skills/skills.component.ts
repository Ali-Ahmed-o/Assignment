import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skills = [
    { name: 'Photoshop', value: 75, color: '#3498db' },
    { name: 'jQuery', value: 60, color: '#e74c3c' },
    { name: 'HTML5', value: 85, color: '#f1c40f' },
    { name: 'CSS3', value: 90, color: '#9b59b6' },
    { name: 'WordPress', value: 70, color: '#1abc9c' },
    { name: 'SEO', value: 80, color: '#4054B2' },
  ];
}
