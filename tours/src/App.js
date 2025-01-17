import React, {useState, useEffect} from 'react';
// Components
import Loading from './components/Loading';
import Tours from './components/Tours';

const url = 'https://course-api.netlify.app/api/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    try{
      const response = await fetch(url);
      const tours = await response.json();
      setTours(tours);
      setIsLoading(false);
    } catch(error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchTours();
  }, [])

  if(isLoading){
    return (
    <main>
      <Loading />
    </main>
    )
  }
  if(tours.length === 0){
    return (
      <main>
          <h1>No More Tours</h1>
          <button onClick={() => fetchTours()} className="btn">Refresh List</button>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  )
}

export default App;