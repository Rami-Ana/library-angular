import { Component, signal } from '@angular/core';
import { BookModel } from '../../interfaces/book-model';
import { BookCard } from '../book-card/book-card';

@Component({
  imports: [BookCard],
  selector: 'app-book-list',
  styleUrl: './book-list.css',
  templateUrl: './book-list.html',
})
export class BookList {
  readonly books = signal<BookModel[]>([
    {
    id: 1,
    title: 'The Lost Kingdom',
    author: 'Emma Carter',
    description: 'Una aventura épica sobre un reino olvidado y los secretos que esconde.',
    coverImage: 'https://picsum.photos/id/24/300/450',
    genre: 'Fantasy',
    publishedYear: 2018,
    isbn: '9781234567001',
  },
  {
    id: 2,
    title: 'Shadows of Tomorrow',
    author: 'Michael Reed',
    description: 'Una historia de ciencia ficción donde la humanidad enfrenta su futuro.',
    coverImage: 'https://picsum.photos/id/25/300/450',
    genre: 'Science Fiction',
    publishedYear: 2021,
    isbn: '9781234567002',
  },
  {
    id: 3,
    title: 'Murder at Midnight',
    author: 'Sophia Blake',
    description: 'Un detective debe resolver un misterioso crimen antes del amanecer.',
    coverImage: 'https://picsum.photos/id/26/300/450',
    genre: 'Mystery',
    publishedYear: 2019,
    isbn: '9781234567003',
  },
  {
    id: 4,
    title: 'Beyond the Horizon',
    author: 'Daniel Foster',
    description: 'Una emotiva novela sobre sueños, viajes y nuevos comienzos.',
    coverImage: 'https://picsum.photos/id/27/300/450',
    genre: 'Drama',
    publishedYear: 2017,
    isbn: '9781234567004',
  },
  {
    id: 5,
    title: 'Code of Destiny',
    author: 'Laura Mitchell',
    description: 'La tecnología y el destino se cruzan en esta apasionante historia.',
    coverImage: 'https://picsum.photos/id/28/300/450',
    genre: 'Thriller',
    publishedYear: 2023,
    isbn: '9781234567005',
  },
  {
    id: 6,
    title: 'The Silent Forest',
    author: 'James Walker',
    description: 'Un bosque aparentemente tranquilo oculta antiguos misterios.',
    coverImage: 'https://picsum.photos/id/29/300/450',
    genre: 'Adventure',
    publishedYear: 2016,
    isbn: '9781234567006',
  },
  {
    id: 7,
    title: 'Heartbeats',
    author: 'Olivia Green',
    description: 'Una novela romántica sobre segundas oportunidades.',
    coverImage: 'https://picsum.photos/id/30/300/450',
    genre: 'Romance',
    publishedYear: 2020,
    isbn: '9781234567007',
  },
  {
    id: 8,
    title: 'The Last Experiment',
    author: 'Nathan Brooks',
    description: 'Un científico arriesga todo por un descubrimiento revolucionario.',
    coverImage: 'https://picsum.photos/id/31/300/450',
    genre: 'Science Fiction',
    publishedYear: 2022,
    isbn: '9781234567008',
  },
  {
    id: 9,
    title: 'Whispers in the Dark',
    author: 'Isabella Moore',
    description: 'Extraños sucesos aterrorizan a una pequeña ciudad.',
    coverImage: 'https://picsum.photos/id/32/300/450',
    genre: 'Horror',
    publishedYear: 2015,
    isbn: '9781234567009',
  },
  {
    id: 10,
    title: 'The Golden Compass',
    author: 'Christopher Lane',
    description: 'Una búsqueda legendaria guiada por una brújula muy especial.',
    coverImage: 'https://picsum.photos/id/33/300/450',
    genre: 'Fantasy',
    publishedYear: 2024,
    isbn: '9781234567010',
  },
  ])

  bookCardClick(bookObject: BookModel): void {
    console.log(bookObject);
  }
}
