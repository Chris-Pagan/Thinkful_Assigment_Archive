select * from authors
join books
on authors.author_id = books.author_id
where books.in_stock = 'false';