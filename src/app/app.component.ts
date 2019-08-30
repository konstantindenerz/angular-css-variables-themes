import {Component, ElementRef, forwardRef} from '@angular/core';
import {ROOT_ELEMENT} from './root-element.token';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    { provide: ROOT_ELEMENT, useExisting: forwardRef(() => ElementRef) },
  ],
})
export class AppComponent {
  title = 'angular-css-variables-themes';
}
