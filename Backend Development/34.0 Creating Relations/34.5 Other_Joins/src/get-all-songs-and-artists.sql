select
  artists.artist_name,
  songs.album_name,
  songs.song_name
from songs
left join artists
on songs.artist = artists.artist_id;