import { Component, inject } from '@angular/core';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private themeService = inject(ThemeService);
  currentTheme = this.themeService.getThemeSignal();

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  getThemeIcon(): string {
    return this.currentTheme() === 'dark' ? '☀️' : '🌙';
  }
}
