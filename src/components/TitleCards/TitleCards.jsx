import './TitleCards.css';
import cards_data from '../../assets/cards/cards_data.js';
import { useEffect, useEffectEvent, useRef, useState } from 'react';

const TitleCards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjE0MGI1OTkxN2VmYjc2OWJhNjcyNTQzODQzYmExYSIsIm5iZiI6MTc2MzExNDMyNC40NzcsInN1YiI6IjY5MTZmZDU0MGNiYjU4OTkwNTNhNDZkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cVL8dn9A2uUM9nAkI75xHkM_WJQ1_3O8DTCa-QhUDic'
  }
};
  
  const handleScroll = (e)=> {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  } ;
  
  useEffect(() => {
    fetch(`
        https://api.themoviedb.org/3/movie/${
          category ? category : 'now_playing'
        }?language=en-US&page=1
      `, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
    
    cardsRef.current.addEventListener('wheel', handleScroll);
  }, []);

  return (
    <div className='cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <div className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w780${card.backdrop_path}`} alt="card-image" />
            <p>{card.original_title }</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards;