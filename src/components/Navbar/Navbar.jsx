import './Navbar.css';
import Logo from '../../assets/logo.png';
import Search from '../../assets/search_icon.svg';
import Bell from '../../assets/bell_icon.svg';
import Profile from '../../assets/profile_img.png';
import drop_icon from '../../assets/drop_icon.svg';
import { useEffect, useRef } from 'react';
import { signout } from '../../firebase';

const Navbar = () => {
  const navRef = useRef();
  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      if(window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    });
  }, []);

  return (
    <div ref={navRef} className='navbar'>
      <div className="left-nav">
        <img src={Logo} alt='netflix-logo' />
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className='right-nav'>
        <img src={Search} alt='search-icon' className='icons' />
        <p>Children</p>
        <img src={Bell} alt='search-icon' className='icons' />
        <div className='profile'>
          <img src={Profile} alt='search-icon' className='profile-icon' />
          <img src={drop_icon} alt='search-icon' className='dropdown_icon' />
          <div className='dropdown'>
            <p onClick={()=> {signout()}}>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;