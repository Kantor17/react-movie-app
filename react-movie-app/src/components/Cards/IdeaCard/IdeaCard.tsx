import IdeaDetails from 'components/IdeaDetails';
import React, { useState } from 'react';
import { IIdea } from 'types';
import Modal from 'ui/Modal';
import '../MovieCard.css';

interface IIdeaCardProps {
  idea: IIdea;
}

export default function IdeaCard({ idea }: IIdeaCardProps) {
  const [isModal, setModal] = useState(false);
  return (
    <>
      <div className="movie-card" onClick={() => setModal(true)} data-testid="movie-card">
        <div className="movie-card__poster">
          <img src={idea.backdrop_path} alt={`${idea.title} backdrop image`} className="bg-img" />
        </div>
        <h3 className="movie-card__title">
          <span className="movie-card__name">{idea.title} </span>
          <span className="movie-card__release-date">({idea.release_date.slice(0, 4)})</span>
        </h3>
        <div className="movie-card__more-container">
          <p className="movie-card__more-text">Click to see more</p>
        </div>
      </div>
      {isModal && (
        <Modal closeCb={() => setModal(false)}>
          <IdeaDetails idea={idea} />
        </Modal>
      )}
    </>
  );
}
