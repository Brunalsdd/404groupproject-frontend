import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { LoginComponent } from "./pages/login/login.component";
import { CreateSurveyComponent } from "./pages/survey/create-survey/create-survey.component";
import { ListSurveyComponent } from "./pages/survey/list-survey/list-survey.component";
import { UpdateSurveyComponent } from './pages/survey/update-survey/update-survey.component';
import { RespondSurveyComponent } from './pages/survey/respond-survey/respond-survey.component';
import { SurveyResultsComponent } from './pages/survey/survey-results/survey-results.component';
import { LoginGuard } from './pages/login/login.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'login', component: LoginComponent, data: {title: 'Login'}},
  {path: '', redirectTo: 'home', pathMatch: "full"},
  {path: 'create-survey', component: CreateSurveyComponent, canActivate: [LoginGuard], data: {title: 'Create Surveys'}},
  {path: 'survey-list', component: ListSurveyComponent, data: {title: 'Surveys'}},
  {path: 'update-survey/:id', component: UpdateSurveyComponent, canActivate: [LoginGuard], data: {title: 'Surveys'}},
  {path: 'respond-survey/:id', component: RespondSurveyComponent, data: {title: 'Respond Survey'}},
  {path: 'survey-results', component: SurveyResultsComponent, canActivate: [LoginGuard], data: {title: 'Survey Results'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
