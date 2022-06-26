import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SinglePageComponent } from './single-page/single-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ProjectsComponent } from './projects/projects.component';
import { ClientsComponent } from './clients/clients.component';
import { InterestComponent } from './interest/interest.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faGithub,
  faFacebook,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    SinglePageComponent,
    ProfileComponent,
    ProjectsComponent,
    ClientsComponent,
    InterestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
      library.addIcons(
        faFacebook,
        faInstagram,
        faGithub);
  }
}
