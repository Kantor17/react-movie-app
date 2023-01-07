import React from 'react';
import './MovieCardsList.css';
import SearchedMovieCard from '../Cards/SearchedMovieCard/SearchedMovieCard';
import { IIdea, IMovie } from 'types';
import IdeaCard from 'components/Cards/IdeaCard';

interface IMovieCardsListProps {
  movies?: IMovie[];
  ideas?: IIdea[];
}
export default function MovieCardsList({ movies, ideas }: IMovieCardsListProps) {
  return (
    <>
      {movies && (
        <div className="movie-cards-list">
          {movies.map((movie) => (
            <SearchedMovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
      {ideas && (
        <div className="movie-cards-list">
          {ideas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      )}
    </>
  );
}
