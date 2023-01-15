import { API_KEY, BASE_URL } from 'API/constants';
import { IMovie } from 'types';

export default async function searchMovies(keyword: string): Promise<IMovie[]> {
  const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${keyword}`);
  if (!response.ok) throw new Error('Unable to get data from server.');
  const data = await response.json();
  return data.results;
}
