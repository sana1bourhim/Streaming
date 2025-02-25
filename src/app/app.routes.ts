import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {NgModule} from '@angular/core';
import path from 'node:path';
import {RegisterComponent} from './register/register.component';
import {StudentHomeComponent} from './student-home/student-home.component';
import {TeacherHomeComponent} from './teacher-home/teacher-home.component';
import {CreateCourseComponent} from './create-course/create-course.component';

export const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'home-student',component:StudentHomeComponent},
  { path: 'teacher-home', component: TeacherHomeComponent },
  { path: 'add-course', component: CreateCourseComponent }

];

