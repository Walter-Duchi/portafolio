import { Component, ChangeDetectionStrategy, inject, computed, signal } from '@angular/core';
import { Theme } from '../../services/theme';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[attr.data-theme]': 'themeSignal()',
  },
})
export class Navbar {
  private readonly themeService = inject(Theme);

  // Signal para el tema actual
  readonly themeSignal = signal(this.themeService.getCurrentTheme());

  // Computed para el icono del tema
  readonly themeIcon = computed(() => (this.themeSignal() === 'dark' ? '🌙' : '☀️'));

  toggleTheme(): void {
    this.themeService.toggleTheme();
    this.themeSignal.set(this.themeService.getCurrentTheme());
  }
}
