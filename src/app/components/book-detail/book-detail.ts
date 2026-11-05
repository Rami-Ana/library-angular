import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../../core/services/book-service';

@Component({
  imports: [],
  selector: 'app-book-detail',
  styleUrl: './book-detail.css',
  templateUrl: './book-detail.html',
})
export class BookDetail {
  readonly route = inject(ActivatedRoute);
  id = this.route.snapshot.params['id'];

  readonly bookData = inject(BookService);

  book = this.bookData.getById(Number(this.id));
}
