import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';

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
      window.location.pathname === '/inventaire'
        ? (this.activeIndex = 1)
        : (this.activeIndex = 0);
  }
}
