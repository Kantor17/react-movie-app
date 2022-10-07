export interface IMovie {
  backdrop_path: string;
  genres: Array<string>;
  id: number;
  original_language: string;
  overview: string;
  release_date: string;
  runtime: number | string;
  title: string;
  vote_average: number;
}
