import React from 'react';
import { tours } from '../data';
import Title from './Title';
import Tour from './Tour';

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />

      <div className="section-center featured-center">
        {tours.map(tour => (
          <Tour key={tour.id} tour={tour} />
        ))}
      </div>
    </section>
  );
};

export default Tours;