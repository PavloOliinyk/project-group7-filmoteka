import Refs from './refs';
import movieCardTmpl from '../templates/card.hbs';
import appendMoviesMarkUp from './markup';
import API from './api-instance';

const initial = API.initialPage;

export default async function showPopularMoviesByDefault(page) {
  const movies = await API.fetchTrendingMovies(page);
  const genres = await API.fetchGenres();
  const moviesWithGenres = movies.map(movie => {
    const { genre_ids } = movie;
    return {
      ...movie,
      genre_ids: [
        ...genres
          .filter(({ id }) => genre_ids.includes(id))
          .map(({ name }) => name)
          .slice(0, 2),
      ],
    };
  });
  appendMoviesMarkUp(Refs.movieStorage, moviesWithGenres, movieCardTmpl);
}

showPopularMoviesByDefault(initial);
