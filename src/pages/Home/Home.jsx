import './Home.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Banner from '../../assets/banner.jpg';
import Banner_Title from '../../assets/title.png';
import Play_Button from '../../assets/play_icon.png';
import Info_Button from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards.jsx';
import Footer from '../../components/Footer/Footer.jsx';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />
      <div className='banner'>
        <img src={Banner} alt='banner' className='banner-img' />
        <div className="caption">
          <img src={Banner_Title} alt='banner-title' className='caption-img' />
          <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul embarks on a quest to save the city from an immortal enemy</p>
          <div className='btns'>
            <button className='btn'><img src={Play_Button} alt='play-icon' />Play</button>
            <button className='btn info-btn'><img src={Info_Button} alt='info-icon' />More Info</button>
          </div>
          <TitleCards />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title={"Blockbuster Movies"} />
        <TitleCards title={"Only on Netflix"} />
        <TitleCards title={"Upcoming"} />
        <TitleCards title={"Top Pics for You"} />
      </div>
      <Footer />
    </div>
  )
}

export default Home;