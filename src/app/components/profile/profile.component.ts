import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.css']
})
export class ProfileComponent {
  title = 'My Profile';
  showAddress = false;
  person = {
    name:'Joe Doe',
    age:35,
    address:{
      street: '400 Walnut St.',
      city: 'Lynntown',
      state: 'MD'
    },
    avatar: 'https://d35bxr3ccprye3.cloudfront.net/images/blank-avatar.gif',
    friends: [
      {name: 'Bob', age:36},
      {name: 'Shelly', age:33},
      {name: 'JaQuan', age:38},
      {name: 'Elvira', age:41}
    ]
  };
  constructor() {
    this.title = 'User Profile';
  }
}
