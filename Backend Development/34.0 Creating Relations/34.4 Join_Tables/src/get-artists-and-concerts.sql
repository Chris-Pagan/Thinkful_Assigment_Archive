select 
  artists.artist_name,
  concerts.concert_name,
 concerts.concert_date,
 artists_concerts.scheduled_start_at,
 artists_concerts.scheduled_end_at
from concerts
join artists_concerts
on concerts.concert_id = artists_concerts.artist_id
join artists
on artists_concerts.artist_id = artists.artist_id;