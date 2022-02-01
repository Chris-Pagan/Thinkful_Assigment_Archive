select *
from authors
join books
on authors.author_id = books.author_id
where authors.nationality <> 'United States of America'
and books.publication_year < 2005;