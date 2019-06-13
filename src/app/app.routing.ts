import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {PostsComponent} from './components/posts/posts.component';
import {ProfileComponent} from './components/profile/profile.component';

const appRoutes: Routes = [
  {
      path: '',
      component: HomeComponent
  },
  {
      path: 'about',
      component: AboutComponent
  },
  {
      path: 'posts',
      component: PostsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

// tslint:disable-next-line: eofline
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
