import { API_KEY, BASE_URL } from 'API/constants';
import { IMovie } from 'types';

interface IGetMoviesResponse {
  page: number;
  results: IMovie[];
  total_results: number;
  total_pages: number;
}

export default async function getMovies(
  keyword: string,
  page: number
): Promise<IGetMoviesResponse> {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyword}&page=${page}`
  );
  if (!response.ok) throw new Error('Unable to get data from server.');
  const data: IGetMoviesResponse = await response.json();
  if (data.results.length < 1) throw new Error('No movies found');
  return data;
}
