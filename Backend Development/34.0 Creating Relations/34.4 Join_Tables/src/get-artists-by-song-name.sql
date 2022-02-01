select
  songs.song_name,
  songs.album_name,
  artists.artist_name
from artists
join songs
on artists.artist_id = songs.artist
where songs.song_name like '%The%';