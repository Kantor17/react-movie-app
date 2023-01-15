import { API_KEY, BASE_URL } from 'API/constants';

export default async function getMovieDetails(id: string | number) {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
}
