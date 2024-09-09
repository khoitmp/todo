import { Component } from '@angular/core';
import { TaskBoardComponent } from "../task-board/task-board.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaskBoardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
}