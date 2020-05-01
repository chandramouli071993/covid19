import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {HomepageComponent} from './homepage/homepage.component';
import {CountriesComponent} from './countries/countries.component';
import {CountriesListComponent} from './countries/countries-list/countries-list.component';
import {CountriesDetailsComponent} from './countries/countries-details/countries-details.component';
import {HttpClientModule} from "@angular/common/http";
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomepageComponent,
    CountriesComponent,
    CountriesListComponent,
    CountriesDetailsComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
