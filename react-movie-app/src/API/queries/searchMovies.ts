import { API_KEY, BASE_URL } from 'API/constants';
import { IMovie } from 'types';

export default async function searchMovies(keyword: string): Promise<IMovie[]> {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyword}`);
  const data = await response.json();
  return data.results;
}
