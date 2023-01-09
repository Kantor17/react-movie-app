import React from 'react';
import { IIdea } from 'types';
import languageFormatter from 'utils/languageFormatter';
import './IdeaDetails.css';

interface IIdeaDetailsProps {
  idea: IIdea;
}

export default function IdeaDetails({ idea }: IIdeaDetailsProps) {
  return (
    <div className="idea-details">
      <h3 className="idea-details__title">{idea.title}</h3>
      <p className="idea-details__overview">{idea.overview}</p>
      <div className="idea-details__grid">
        <div className="idea-details__column">
          <div className="idea-details__date">
            <h4 className="idea-details__subtitle">Release date: </h4>
            {idea.release_date}
          </div>
          <div className="idea-details__genres">
            <h4 className="idea-details__subtitle">Genres: </h4>
            {idea.genres.join(', ')}
          </div>
        </div>
        <div className="idea-details__column">
          <div className="idea-details__language">
            <h4 className="idea-details__subtitle">Original language: </h4>
            {languageFormatter(idea.original_language)}
          </div>
          <div className="idea-details__runtime">
            <h4 className="idea-details__subtitle">Runtime: </h4>
            {idea.runtime} min.
          </div>
        </div>
      </div>
    </div>
  );
}
