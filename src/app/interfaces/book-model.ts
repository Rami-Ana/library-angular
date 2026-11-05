export interface BookModel {
    id: number,
    title: string,
    author: string,
    description: string,
    coverImage: string,
    genre: string,
    publishedYear: number, //si da tiempo hacer createdAt: Date;
    isbn: string,
}
