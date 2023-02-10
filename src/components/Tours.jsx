import React from 'react';
import { tours } from '../data';
import Title from './Title';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />

      <div className="section-center featured-center">
        {tours.map(tour => (
          <article className="tour-card">
            <div className="tour-img-container">
              <img src={tour.image} className="tour-img" alt={tour.title} />
              <p className="tour-date">{tour.date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{tour.title}</h4>
              </div>
              <p>
                {tour.description}
              </p>
              <div className="tour-footer">
                <p>
                  <span><i className="fas fa-map"></i></span>{tour.destination}
                </p>
                <p>{tour.duration}</p>
                <p>from ${tour.price}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Tours;