import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app/app.component';
import {NavigationComponent} from './components/navigation/navigation.component';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from './auth.guard';
import {AuthService} from './services/auth.service';
import {Global} from './helper/global';
import {AppService} from './services/app.service';
import {CoolStorageModule} from 'angular2-cool-storage';
import {AuthComponent} from './pages/auth/auth.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {HomeComponent} from './pages/home/home.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoolStorageModule
  ],
  providers: [
    AuthService,
    AppService,
    Global,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
