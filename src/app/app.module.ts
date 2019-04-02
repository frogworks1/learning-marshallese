import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatMenuModule } from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { InputComponent } from './input/input.component';
import { MatInputModule } from '@angular/material/input';
import { BodyComponent } from './body/body.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
   declarations: [
      AppComponent,
      NavigationComponent,
      InputComponent,
      BodyComponent,
      LandingPageComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MatMenuModule,
      NoopAnimationsModule,
      MatInputModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
