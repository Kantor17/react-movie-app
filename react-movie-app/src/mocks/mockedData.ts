import { IIdea } from 'types';

export const mockedSearchResponse = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: '/jHwASc8hBtdfRGUmxS6pq5mHiyN.jpg',
      genre_ids: [18, 36],
      id: 152532,
      original_language: 'en',
      original_title: 'Dallas Buyers Club',
      overview:
        'Loosely based on the true-life tale of Ron Woodroof, a drug-taking, women-loving, homophobic man who in 1986 was diagnosed with HIV/AIDS and given thirty days to live.',
      popularity: 18.286,
      poster_path: '/7Fdh7gUq3plvQqxRbNYhWvDABXA.jpg',
      release_date: '2013-11-01',
      title: 'Dallas Buyers Club',
      video: false,
      vote_average: 7.9,
      vote_count: 7547,
    },
  ],
  total_pages: 1,
  total_results: 1,
};

export const mockedDetailsResponse = {
  adult: false,
  backdrop_path: '/jHwASc8hBtdfRGUmxS6pq5mHiyN.jpg',
  belongs_to_collection: null,
  budget: 5000,
  genres: [
    {
      id: 18,
      name: 'Drama',
    },
    {
      id: 36,
      name: 'History',
    },
  ],
  homepage: '',
  id: 152532,
  imdb_id: 'tt0790636',
  original_language: 'en',
  original_title: 'Dallas Buyers Club',
  overview:
    'Loosely based on the true-life tale of Ron Woodroof, a drug-taking, women-loving, homophobic man who in 1986 was diagnosed with HIV/AIDS and given thirty days to live.',
  popularity: 18.286,
  poster_path: '/7Fdh7gUq3plvQqxRbNYhWvDABXA.jpg',
  production_companies: [
    {
      id: 33,
      logo_path: '/8lvHyhjr8oUKOOy2dKXoALWKdp0.png',
      name: 'Universal Pictures',
      origin_country: 'US',
    },
    {
      id: 6626,
      logo_path: '/A1BnMoWjzjOrjzpWimyBQkf84mS.png',
      name: 'Voltage Pictures',
      origin_country: 'US',
    },
    {
      id: 14636,
      logo_path: null,
      name: 'Evolution Independent',
      origin_country: 'US',
    },
    {
      id: 19631,
      logo_path: null,
      name: 'Truth Entertainment',
      origin_country: 'US',
    },
    {
      id: 126735,
      logo_path: null,
      name: 'CE',
      origin_country: 'US',
    },
    {
      id: 126736,
      logo_path: null,
      name: 'R² Films',
      origin_country: 'US',
    },
    {
      id: 137902,
      logo_path: null,
      name: 'Rainmaker Films',
      origin_country: '',
    },
  ],
  production_countries: [
    {
      iso_3166_1: 'US',
      name: 'United States of America',
    },
  ],
  release_date: '2013-11-01',
  revenue: 55736588,
  runtime: 117,
  spoken_languages: [
    {
      english_name: 'English',
      iso_639_1: 'en',
      name: 'English',
    },
    {
      english_name: 'Japanese',
      iso_639_1: 'ja',
      name: '日本語',
    },
  ],
  status: 'Released',
  tagline: 'Sometimes it takes a hustler to change the world',
  title: 'Dallas Buyers Club',
  video: false,
  vote_average: 7.936,
  vote_count: 7548,
};

export const mockedIdea: IIdea = {
  id: '1g2ras2',
  title: 'My movie',
  overview:
    'This is a mocked overview of mocked movie and it needs to be at least 50 characters long',
  release_date: '9999-01-01',
  genres: ['action', 'history'],
  original_language: 'ua',
  runtime: '> 50',
  backdrop_path: 'https://image.tmdb.org/t/p/original/kytPt3B4ft2DH7OMNiAsWuXkw4K.jpg',
};
