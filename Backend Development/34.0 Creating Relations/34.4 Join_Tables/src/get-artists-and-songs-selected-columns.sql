select 
  artists.artist_id,
  artists.artist_name,
  songs.song_name
from songs
join artists
on songs.artist = artists.artist_id;