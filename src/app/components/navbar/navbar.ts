import { Component, inject, HostListener } from '@angular/core';
import { ThemeService } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  private themeService = inject(ThemeService);
  currentTheme = this.themeService.getThemeSignal();
  isMenuOpen = false;

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMenu(event: Event): void {
    event.stopPropagation();
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu(): void {
    this.isMenuOpen = false;
  }

  getThemeIcon(): string {
    return this.currentTheme() === 'dark' ? '☀️' : '🌙';
  }

  // Cerrar menú al hacer clic fuera
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (this.isMenuOpen) {
      this.closeMenu();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    // Cerrar menú al cambiar a pantalla grande
    if (window.innerWidth > 768 && this.isMenuOpen) {
      this.closeMenu();
    }
  }
}
