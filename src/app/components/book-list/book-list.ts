import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { BookModel } from '../../interfaces/book-model';
import { BookCard } from '../book-card/book-card';
import { BookService } from '../../core/services/book-service';
import { Router } from '@angular/router';

@Component({
  imports: [BookCard],
  selector: 'app-book-list',
  styleUrl: './book-list.css',
  templateUrl: './book-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BookList {
  readonly bookData = inject(BookService);
  readonly router = inject(Router);

  readonly books = signal<BookModel[]>(this.bookData.getAll())

  goToDetail(id: number) {
    this.router.navigateByUrl(`book/${id}`);
  }
}
