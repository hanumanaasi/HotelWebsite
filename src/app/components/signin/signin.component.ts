import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenwidth = 0;
  showLogin = true;
  showSignup = false;
  show = true;

  showLoginForm() {
    this.showLogin = true;
    this.showSignup = false;
  }

  showSignUpForm() {
    this.showSignup = true;
    this.showLogin = false;
  }

  close() {
    this.show = false;
  }

  showLoginClass(): string {
    let styleClass = '';
    if (this.collapsed && this.screenwidth > 768) {
      styleClass = 'home-trimmed';
    } else if (
      !this.collapsed &&
      this.screenwidth <= 768 &&
      this.screenwidth > 0
    ) {
      styleClass = 'home-md-screen';
    }

    return styleClass;
  }

  constructor() {}

  ngOnInit(): void {}
}
