import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {FooterComponent} from '../footer/footer.component';
import {LogoComponent} from '../logo/logo.component';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FooterComponent,
    LogoComponent,
    NgStyle
  ],
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent {
  courseForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.courseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      category: ['', Validators.required],
      level: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.courseForm.valid) {
      console.log('Données du cours:', this.courseForm.value);
      alert('Cours créé avec succès !');
    }
  }
}
