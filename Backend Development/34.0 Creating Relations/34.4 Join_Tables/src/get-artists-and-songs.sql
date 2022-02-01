select *
from songs
join artists
on songs.artist = artists.artist_id;