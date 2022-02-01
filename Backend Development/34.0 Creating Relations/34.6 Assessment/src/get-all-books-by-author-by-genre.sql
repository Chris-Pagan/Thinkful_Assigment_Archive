SELECT *
FROM authors
JOIN books
ON authors.author_id = books.author_id
join books_genres
on books_genres.book_id = books.book_id
join genres
on books_genres.genre_id = genres.genre_id
and authors.author_name = 'Leo Tolstoy'
WHERE genres.genre_name = 'autobiography' or genres.genre_name = 'history';
  