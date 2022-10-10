export interface IMovie {
  id: number | string;
  backdrop_path: string;
  genres: Array<string>;
  original_language: string;
  overview: string;
  release_date: string;
  runtime: number | string;
  title: string;
  vote_average?: number;
}
