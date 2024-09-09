import { Component } from '@angular/core';
import { CONSTANTS } from '../shared/constants/common.constants';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html'
})
export class PageNotFoundComponent {
  constants = CONSTANTS;
}