import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MyprojectsComponent } from './myprojects/myprojects.component';
import { MyexperiencesComponent } from './myexperiences/myexperiences.component';
import { ContactComponent } from './contact/contact.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { TesthomeComponent } from './testhome/testhome.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    MyprojectsComponent,
    MyexperiencesComponent,
    ContactComponent,
    TechnologiesComponent,
    TesthomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
