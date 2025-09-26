import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private currentTheme = 'light';

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    this.currentTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
    this.applyTheme(this.currentTheme);
    localStorage.setItem('portfolio-theme', this.currentTheme);
  }

  private loadTheme(): void {
    // 1. Intentar cargar tema guardado
    const savedTheme = localStorage.getItem('portfolio-theme');

    // 2. Si no hay tema guardado, usar preferencia del sistema
    if (savedTheme) {
      this.currentTheme = savedTheme;
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme = systemPrefersDark ? 'dark' : 'light';
    }

    this.applyTheme(this.currentTheme);
  }

  private applyTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
  }

  getCurrentTheme(): string {
    return this.currentTheme;
  }
}
