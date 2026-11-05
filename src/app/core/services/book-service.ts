import { Injectable } from '@angular/core';
import { BookModel } from '../../interfaces/book-model';

@Injectable({ providedIn: 'root', })

export class BookService {
    bookData: BookModel[] = [
        {
            id: 1,
            title: 'The Lost Kingdom',
            author: 'Emma Carter',
            description: 'An epic adventure about a forgotten kingdom and the secrets it hides.',
            coverImage: 'https://picsum.photos/id/24/300/450',
            genre: 'Fantasy',
            publishedYear: 2018,
            isbn: '9781234567001',
        },
        {
            id: 2,
            title: 'Shadows of Tomorrow',
            author: 'Michael Reed',
            description: 'A science fiction story where humanity faces its uncertain future.',
            coverImage: 'https://picsum.photos/id/25/300/450',
            genre: 'Science Fiction',
            publishedYear: 2021,
            isbn: '9781234567002',
        },
        {
            id: 3,
            title: 'Murder at Midnight',
            author: 'Sophia Blake',
            description: 'A detective must solve a mysterious crime before dawn.',
            coverImage: 'https://picsum.photos/id/26/300/450',
            genre: 'Mystery',
            publishedYear: 2019,
            isbn: '9781234567003',
        },
        {
            id: 4,
            title: 'Beyond the Horizon',
            author: 'Daniel Foster',
            description: 'An emotional novel about dreams, journeys, and new beginnings.',
            coverImage: 'https://picsum.photos/id/27/300/450',
            genre: 'Drama',
            publishedYear: 2017,
            isbn: '9781234567004',
        },
        {
            id: 5,
            title: 'Code of Destiny',
            author: 'Laura Mitchell',
            description: 'Technology and fate collide in this thrilling story.',
            coverImage: 'https://picsum.photos/id/28/300/450',
            genre: 'Thriller',
            publishedYear: 2023,
            isbn: '9781234567005',
        },
        {
            id: 6,
            title: 'The Silent Forest',
            author: 'James Walker',
            description: 'A seemingly peaceful forest conceals ancient mysteries.',
            coverImage: 'https://picsum.photos/id/29/300/450',
            genre: 'Adventure',
            publishedYear: 2016,
            isbn: '9781234567006',
        },
        {
            id: 7,
            title: 'Heartbeats',
            author: 'Olivia Green',
            description: 'A romantic novel about second chances and lasting love.',
            coverImage: 'https://picsum.photos/id/30/300/450',
            genre: 'Romance',
            publishedYear: 2020,
            isbn: '9781234567007',
        },
        {
            id: 8,
            title: 'The Last Experiment',
            author: 'Nathan Brooks',
            description: 'A scientist risks everything for a groundbreaking discovery.',
            coverImage: 'https://picsum.photos/id/31/300/450',
            genre: 'Science Fiction',
            publishedYear: 2022,
            isbn: '9781234567008',
        },
        {
            id: 9,
            title: 'Whispers in the Dark',
            author: 'Isabella Moore',
            description: 'Strange events terrorize a small town.',
            coverImage: 'https://picsum.photos/id/32/300/450',
            genre: 'Horror',
            publishedYear: 2015,
            isbn: '9781234567009',
        },
        {
            id: 10,
            title: 'The Golden Compass',
            author: 'Christopher Lane',
            description: 'A legendary quest guided by a very special compass.',
            coverImage: 'https://picsum.photos/id/33/300/450',
            genre: 'Fantasy',
            publishedYear: 2024,
            isbn: '9781234567010',
        },
    ]

    getAll(): BookModel[] {
      return this.bookData;  
    }

    getById(id:number){
        return this.bookData.find(
            item => item.id === id)
    }
}
