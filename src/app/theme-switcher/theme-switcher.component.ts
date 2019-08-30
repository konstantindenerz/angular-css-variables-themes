import {Component, ElementRef, Inject, OnInit} from '@angular/core';
import {ROOT_ELEMENT} from '../root-element.token';
import {Themes} from './themes';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
})
export class ThemeSwitcherComponent implements OnInit {

  currentTheme = Themes.Default;
  readonly themes = [Themes.Default, Themes.Dark];

  constructor(@Inject(ROOT_ELEMENT) private readonly rootElement: ElementRef) {
  }

  ngOnInit() {
  }

  public apply(theme: Themes) {
    this.currentTheme = theme;
    const classList = this.rootElement.nativeElement.classList;
    classList.forEach((current) => {
      if (current.startsWith('theme-')) {
        classList.remove(current);
      }
    });
    classList.add(`theme-${theme}`);
  }
}
