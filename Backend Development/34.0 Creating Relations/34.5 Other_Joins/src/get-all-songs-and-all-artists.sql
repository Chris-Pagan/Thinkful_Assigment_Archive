select
  artists.artist_name as artist,
  songs.album_name as album,
  songs.song_name
from songs
full join artists
on songs.artist = artists.artist_id;