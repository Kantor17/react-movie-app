import React, { useState } from 'react';

export default function Cast() {
  const [isExtended, setExtended] = useState(false);

  return (
    <section className="cast section">
      <div className="container">
        <div className="cast__top">
          <h2 className="cast__heading h2">Cast & Crew</h2>
          <button
            onClick={() => setExtended(!isExtended)}
            className={`cast__extend ${
              isExtended ? 'cast__extend_active' : ''
            } iconed iconed_right`}
          >
            See more
          </button>
        </div>
        <ul className="cast__list">
          {Array(Math.floor(8))
            .fill(15)
            .map((item, idx) => (
              // eslint-disable-next-line react/jsx-key
              <li className="cast__item">
                <img
                  src="https://image.tmdb.org/t/p/original/kytPt3B4ft2DH7OMNiAsWuXkw4K.jpg"
                  alt=""
                  className="cast__img"
                />
                <h4 className="cast__name">Ryan Gosling</h4>
                <h5 className="cast__role">Driver</h5>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}
