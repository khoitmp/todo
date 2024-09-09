import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CONSTANTS } from './shared/constants/common.constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constants = CONSTANTS;
}