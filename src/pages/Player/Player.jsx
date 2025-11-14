import './Player.css';
import BackArrow from '../../assets/back_arrow_icon.png';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [apiData, setApiData] = useState({
    name: '',
    key: '',
    published_at: '',
    type: ''
  });

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZjE0MGI1OTkxN2VmYjc2OWJhNjcyNTQzODQzYmExYSIsIm5iZiI6MTc2MzExNDMyNC40NzcsInN1YiI6IjY5MTZmZDU0MGNiYjU4OTkwNTNhNDZkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cVL8dn9A2uUM9nAkI75xHkM_WJQ1_3O8DTCa-QhUDic'
  }
};

useEffect(() => {
  fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results[0]))
    .catch(err => console.error(err));
}, []);

  return (
    <div className='player'>
      <img src={BackArrow} alt="back-arrow-icon" onClick={()=> {navigate(-2)}} />
      <iframe src={`https://www.youtube.com/embed/${apiData.key}`}
        width='90%' height='90%' title='trailer' frameBorder='0' allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  )
}

export default Player;