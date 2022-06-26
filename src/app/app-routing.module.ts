import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent} from './profile/profile.component';
import { InterestComponent } from './interest/interest.component';
import { ProjectsComponent } from './projects/projects.component';
import { ClientsComponent } from './clients/clients.component';
import { SinglePageComponent } from './single-page/single-page.component';

const routes: Routes = [
  { path: '', component: SinglePageComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'interest', component: InterestComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'clients', component: ClientsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
