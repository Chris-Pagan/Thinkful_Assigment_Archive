select
  artists.artist_name,
  songs.album_name,
  songs.song_name
from artists
left join songs
on artists.artist_id = songs.artist;