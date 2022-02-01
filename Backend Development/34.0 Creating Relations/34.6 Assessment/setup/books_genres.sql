create table books_genres
(
  book_id integer references books(book_id),
  genre_id integer references genres(genre_id),
  primary key (book_id, genre_id)
);