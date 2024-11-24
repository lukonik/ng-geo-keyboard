import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeoKeyboard } from 'ng-geo-keyboard';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeoKeyboard],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'demo';
}
