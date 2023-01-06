import { API_KEY, BASE_URL } from 'API/constants';

export default async function getMovieDetails(id: string | number, addInfo?: ['credits']) {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${API_KEY}${
      addInfo ? `&append_to_response=${addInfo.join(', ')}` : ''
    }`
  );
  const data = await response.json();
  return data;
}
