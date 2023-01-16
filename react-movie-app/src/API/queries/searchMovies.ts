import { API_KEY, BASE_URL } from 'API/constants';
import { IMovie } from 'types';

interface ISearchMoviesResponse {
  page: number;
  results: IMovie[];
  total_results: number;
  total_pages: number;
}

export default async function searchMovies(
  keyword: string,
  page: number
): Promise<ISearchMoviesResponse> {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyword}&page=${page}`
  );
  if (!response.ok) throw new Error('Unable to get data from server.');
  const data = await response.json();
  return data;
}
