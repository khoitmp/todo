import { Component } from '@angular/core';
import { CONSTANTS } from '../shared/constants/common.constants';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html'
})
export class AboutComponent {
  constants = CONSTANTS;
}