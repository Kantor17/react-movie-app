import { BASE_IMG_PATH } from 'API/constants';
import React, { useState } from 'react';
import { ICast, ICrew } from 'types';
import personPlaceholder from '../../assets/img/person-placeholder.jpg';

interface ICreditsProps {
  people: ICast[] | ICrew[];
  title: string;
}
export default function Credits({ people, title }: ICreditsProps) {
  const TOP_AMOUNT = 8;

  const [isExtended, setExtended] = useState(false);

  return (
    <section className="credits section">
      <div className="container">
        <div className="credits__top">
          <h2 className="credits__heading h2">{title}</h2>
          {people.length > TOP_AMOUNT && (
            <button
              onClick={() => setExtended(!isExtended)}
              className={`credits__extend ${
                isExtended ? 'credits__extend_active' : ''
              } iconed iconed_right`}
            >
              {`Show ${isExtended ? 'less' : 'more'}`}
            </button>
          )}
        </div>
        <ul className="credits__list">
          {(isExtended ? people : people.slice(0, TOP_AMOUNT)).map((person) => (
            <li className="credits__item" key={person.id + (person.job || person.character || '')}>
              <img
                src={
                  person.profile_path ? `${BASE_IMG_PATH}${person.profile_path}` : personPlaceholder
                }
                alt={`${person.name} photo`}
                className="credits__img"
              />
              <h4 className="credits__name">{person.name}</h4>
              <h5 className="credits__role">{person.character || person.job}</h5>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
