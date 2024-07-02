import React from 'react';

function Work({ position, company, location, type, duration }) {
  return (
    <div className="work-item">
      <h2 className="work-position">{position}</h2>
      <p className="work-company">{company}</p>
      <p className="work-location">{location}</p>
      <p className="work-type">{type}</p>
      <p className="work-duration">{duration}</p>
    </div>
  );
}

export default Work;
