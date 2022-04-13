import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemDetailsComponent } from './components/blog-item-details/blog-item-details.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import {DataService} from "./services/data.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { SummaryPipe } from './pipes/summary.pipe';
import { SearchBarComponent } from './shared/search-bar/search-bar.component';
import { BlogHomeComponent } from './components/blog-home/blog-home.component';
import {FilterTextPipe} from "./pipes/filter-text.pipe";
import {FormsModule} from "@angular/forms";
import { TextFormatDirective } from './directives/text-format.directive';
import { HomeComponent } from './components/home/home.component';
import {RouterModule} from "@angular/router";
import {AuthService} from "./services/auth.service";
import {AuthInterceptor} from "./services/auth.interceptor";
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NewPostFormComponent } from './components/new-post-form/new-post-form.component';




@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    BlogItemTextComponent,
    BlogItemDetailsComponent,
    BlogItemComponent,
    BlogItemImageComponent,
    SummaryPipe,
    SearchBarComponent,
    BlogHomeComponent,
    FilterTextPipe,
    TextFormatDirective,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    NewPostFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // RouterModule.forRoot(routes)

  ],
  providers: [
    AuthService,
    DataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
