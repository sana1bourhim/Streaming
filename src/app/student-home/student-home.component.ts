import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-student-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    FooterComponent
  ],
  templateUrl: './student-home.component.html',
  styleUrls: ['./student-home.component.css']
})
export class StudentHomeComponent implements OnInit {
  searchQuery: string = '';
  courses = [
    {
      id: 1,
      titre: 'Introduction à Angular',
      description: 'Apprenez les bases d\'Angular pour créer des applications web modernes.',
      categorie: 'Programmation'
    },
    {
      id: 2,
      titre: 'JavaScript Avancé',
      description: 'Maîtrisez les concepts avancés de JavaScript.',
      categorie: 'Programmation'
    },
    {
      id: 3,
      titre: 'UI/UX Design',
      description: 'Découvrez les principes de conception d\'interfaces utilisateur.',
      categorie: 'Design'
    }
  ];

  recommendations = [
    {
      id: 4,
      titre: 'React pour Débutants',
      description: 'Apprenez à créer des applications web avec React.',
      categorie: 'Programmation'
    },
    {
      id: 5,
      titre: 'Node.js Fondamentaux',
      description: 'Découvrez comment construire des applications backend avec Node.js.',
      categorie: 'Programmation'
    }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  searchCourses(): void {
    console.log('Recherche :', this.searchQuery);
    // Ajoutez ici la logique pour rechercher des cours
  }

  viewCourse(courseId: number): void {
    this.router.navigate(['/course', courseId]);
  }

  viewProfile(): void {
    this.router.navigate(['/profile']);
  }

  logout(): void {
    this.router.navigate(['/login']);
  }
}
