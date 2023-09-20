import { useEffect, useState } from 'react';
const KEY = '98ffaf31';
export function useMovies(query) {
  const [movies, setMovies] = useState([]);

  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    async function fetchMovies() {
      try {
        setisLoading(true);
        setError('');
        const res = await fetch(
          `http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
          { signal: controller.signal }
        );
        if (!res.ok) {
          throw new Error('Error fetching movies');
        }

        const data = await res.json();
        if (data.Response === 'False') throw new Error('Movie not Found!');
        setMovies(data?.Search);
        console.log(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.log(error.message);
          setError(error.message);
        }
      } finally {
        setisLoading(false);
      }
    }
    if (query.length < 3) {
      setMovies([]);
      setError('');
      return;
    }
    fetchMovies();
    return function () {
      controller.abort();
    };
  }, [query]);

  return { movies, isLoading, error };
}
