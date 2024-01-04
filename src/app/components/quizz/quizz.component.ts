import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.css',
})
export class QuizzComponent {
  title: string = '';

  questions: any;
  questionsSelected: any;

  answers: string[] = [];
  answerSelected: string = '';

  questionIndex: number = 0;
  questionMaxIndex: number = 0;

  finished: boolean = true;
}
