import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';

function Home() {
  return (
    <div className='home'>
      <div className='home__header'>
        <div className='home__headerLeft'>
          {/* Link */}
          <Link to='/about'>About</Link>
          {/* Link */}
          <Link to='/store'>Store</Link>
        </div>
        <div className='home__headerRight'>
          {/* Link */}
          <Link to='/gmail'>Gmail</Link>
          {/* Link */}
          <Link to='/images'>Images</Link>
          {/* Icon */}
          <AppsIcon />
          {/* Avatar */}
          <Avatar />
        </div>
      </div>

      <div className='home__body'>
        {/* Google logo */}
        <img
          src='https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          alt=''
        />
        <div className='home__inputContainer'>
          {/* Search */}
          <Search />
        </div>
      </div>
    </div>
  );
}

// <a> tag use to go to new page and refresh
//  <Link> tahes us to that page without refresh

export default Home;
