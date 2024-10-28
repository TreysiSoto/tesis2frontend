import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  standalone: true,
  imports: [RouterOutlet], 
})
export class AppComponent {
  title = 'fronAngular'; 
  

  constructor(private router: Router) {} 

  isLoginPage(): boolean {
    return this.router.url === 'login'; 
  }
}

