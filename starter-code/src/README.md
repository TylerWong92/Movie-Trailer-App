#Netflix Clone With Autoplaying Video Carousel
![Demo](./components/assets/AppDemo.gif)

####Overview
Create a Movie trailer app using The Movie Data API to retrieve the latest movie and upcoming movie data. Users would be able to browse through the movie covers and watch the trailer upon clicking the movie cover. Get the movie synopsis with a click of the view button under the cover.

---

####Documentation (API)
Im using React custom hook and "axios" to fetch my data under my hook folder.

Homepage.jsx line.17
Get latest movie : https://developers.themoviedb.org/3/movies/get-latest-movie

```javascript
const { data, loading, error, refetch } = useFetch(
  `https://api.themoviedb.org/3/movie/now_playing?api_key=${api}&language=en-US&page=1`
);
```

CarouselUpcoming.jsx line.18
Get Upcoming Movies: https://developers.themoviedb.org/3/movies/get-upcoming

```javascript
const { data, loading, error } = useFetch(
  `https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=2`
);
```

DisplayMovie.jsx line.6
Get Video: https://developers.themoviedb.org/3/movies/get-movie-videos

```javascript
const { data, loading, error, refetch } = useFetch(
  `https://api.themoviedb.org/3/movie/${props.id}/videos?api_key=${api}&language=en-US`
);
```

### APP Hierarchy

![TEXT](../public/ga.ico)

Table of Contents:
MyCustom hook to Fetch API
Router 6 for moving home to inner page
Carousell slider (react-slide)
Display - iframe
reusable component
innerpages

---

##BUILD WITH

![TEXT](../public/ga.ico)

---
