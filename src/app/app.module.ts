import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {PostsComponent} from './components/posts/posts.component';
import {SidebarComponent} from './components/sidebar/sidebar';
import {ProfileComponent} from './components/profile/profile.component';
import {routing} from './app.routing';
import {HttpClientModule} from '@angular/common/http';
// import { NgModule } from '@angular/core'; (improted in app-roting.module)
// import { BrowserModule } from '@angular/platform-browser'; (imported in main?)
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [ BrowserModule, routing, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HomeComponent, AboutComponent, PostsComponent, SidebarComponent, ProfileComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
