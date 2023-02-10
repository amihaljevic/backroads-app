import React from 'react';

const Service = ({ service }) => {
  return (
    <article className="service">
      <span className="service-icon"><i className={`fas ${service.icon} fa-fw`}></i></span>
      <div className="service-info">
        <h4 className="service-title">{service.title}</h4>
        <p className="service-text">
          {service.description}
        </p>
      </div>
    </article>
  );
};

export default Service;