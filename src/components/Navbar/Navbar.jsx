import { useEffect, useRef, useState } from 'react';
import './Navbar.css';

import Logo from '../../assets/logo.png';
import Search from '../../assets/search_icon.svg';
import Bell from '../../assets/bell_icon.svg';
import Profile from '../../assets/profile_img.png';
import DropIcon from '../../assets/drop_icon.svg';
import { signout } from '../../firebase';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { user } = useAuth();
  const navRef = useRef();
  const dropdownRef = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const username = user?.name || user?.displayName || user?.email?.split('@')[0] || 'User';

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY >= 80) {
        navRef.current.classList.add('nav-dark');
      } else {
        navRef.current.classList.remove('nav-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('click', handleClickOutSide);
    } else {
      document.removeEventListener('click', handleClickOutSide);
    }

    return () => document.removeEventListener('click', handleClickOutSide);
  }, [isOpen]);

  return (
    <nav ref={navRef} className='navbar'>
      <div className='left-nav'>
        <img src={Logo} alt='Netflix Logo' />
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
        <p>{username}</p>
        <img src={Bell} alt='bell-icon' className='icons' />

        <div
          className={`profile ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen((prev) => !prev)}
          ref={dropdownRef}
        >
          <img src={Profile} alt='profile-icon' className='profile-icon' />
          <img src={DropIcon} alt='dropdown-arrow' className='dropdown-icon' />
          
          <div className='dropdown'>
            <p onClick={()=> {signout()}}>Sign Out</p>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;