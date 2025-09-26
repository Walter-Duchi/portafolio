import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private currentTheme = signal<'dark' | 'light'>('dark');

  constructor() {
    this.loadTheme();
  }

  toggleTheme(): void {
    const newTheme = this.currentTheme() === 'dark' ? 'light' : 'dark';
    this.currentTheme.set(newTheme);
    this.applyTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem('portfolio-theme') as 'dark' | 'light';

    if (savedTheme) {
      this.currentTheme.set(savedTheme);
    } else {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this.currentTheme.set(systemPrefersDark ? 'dark' : 'light');
    }

    this.applyTheme(this.currentTheme());
  }

  private applyTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
  }

  getCurrentTheme() {
    return this.currentTheme();
  }

  getThemeSignal() {
    return this.currentTheme.asReadonly();
  }
}
