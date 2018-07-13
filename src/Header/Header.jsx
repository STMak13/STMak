import React from 'react';
import './Header.css';

class Header extends React.Component {
  render() {
    return <div className='header'>
      <div className='avatar_photo'>
        <img className='avatar_photo__mex' src='https://scontent.fiev6-1.fna.fbcdn.net/v/t31.0-8/13123200_1703978009819922_6636929693570579083_o.jpg?_nc_cat=0&oh=d5fa429515f63d4598b7ca43710b12f2&oe=5BAE6248' alt='Mak'></img>
      </div>
      <div className='header_title__description'>
        <h1 className='header_title'>
          <p className='info_name'>Makovetskyi Sergii</p>
          <p className='info_post'><em>Kiev, Mechnikova str., ap. 38</em></p>
        </h1>
      </div>
    </div>
  }
}

export default Header;
