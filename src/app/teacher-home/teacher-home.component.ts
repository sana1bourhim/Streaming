import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardModule} from '@angular/material/card';
import {CommonModule, NgForOf} from '@angular/common';
import {MatIcon} from '@angular/material/icon';
import {MatMenu, MatMenuTrigger} from '@angular/material/menu';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-teacher-home',
  templateUrl: './teacher-home.component.html',
  standalone: true,
  imports: [
    MatCardModule,
    CommonModule,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    NgForOf,
    MatIcon,
    MatMenu,
    MatMenuTrigger,
    FooterComponent
  ],
  styleUrls: ['./teacher-home.component.css']
})
export class TeacherHomeComponent implements OnInit {
  courses = [
    {
      id: 1,
      titre: 'Introduction à Angular',
      description: 'Apprenez les bases d\'Angular pour créer des applications web modernes.',
      categorie: 'Programmation',
      etudiantsInscrits: 25,
      noteMoyenne: 4.5
    },
    {
      id: 2,
      titre: 'JavaScript Avancé',
      description: 'Maîtrisez les concepts avancés de JavaScript.',
      categorie: 'Programmation',
      etudiantsInscrits: 18,
      noteMoyenne: 4.2
    }
  ];

  totalCourses = 2;
  totalStudents = 43;
  averageRating = 4.35;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  addCourse(): void {
    this.router.navigate(['/add-course']);
  }

  editCourse(courseId: number): void {
    this.router.navigate(['/edit-course', courseId]);
  }

  deleteCourse(courseId: number): void {
    console.log('Supprimer le cours :', courseId);
    // Ajoutez ici la logique pour supprimer le cours
  }

  viewProfile(): void {
    this.router.navigate(['/profile']);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
