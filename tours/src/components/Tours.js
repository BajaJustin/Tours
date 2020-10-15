import React from 'react';
import Tour from './Tour';

const Tours = (props) => {
  const {tours, removeTour} = props;
  return (
    <>
    <h1>All Our Tours</h1>
      {tours.map((tour) => {
        return <Tour key={tour.id}{...tour} removeTour={removeTour} />
      })}
    </>
  )
}

export default Tours;