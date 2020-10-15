import React, {useState} from 'react';

const Tour = ({id, name, info, image, price, removeTour}) => {
  const [showInfo, setShowInfo] = useState();
  return (
    <article className="tour">
      <img src={image} alt={name} className="tourImage" />
      <div>
        <h3 className="tourName">{name}</h3>
        <hr />
        <h3 className="tourPrice">Price: ${price}</h3>
        <p className="tourInfo">
          {showInfo ? info : `${info.substring(0,200)}...`}
          <button onClick={() => setShowInfo(!showInfo)} className="showBtn">
            {showInfo ? 'Show Less': 'Show More'}
          </button>
        </p>
      </div>
      <button onClick={() => removeTour(id)} className="deleteBtn">Remove Tour</button>
    </article>
  )
}

export default Tour;