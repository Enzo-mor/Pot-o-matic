import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

const paths = ['/', '/inventaire', '/pot'];

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  activeIndex = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    this.activeIndex =
      paths.findIndex((path) => path === window.location.pathname) || 0;
  }
}
