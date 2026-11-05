import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { BookModel } from '../../interfaces/book-model';

@Component({
  imports: [],
  selector: 'app-book-card',
  styleUrl: './book-card.css',
  templateUrl: './book-card.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookCard {
  readonly book = input.required<BookModel>();
  readonly bookClick = output<number>();

  onClickBook(): void {
    this.bookClick.emit(this.book().id);
  }
}