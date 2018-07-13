import React from 'react';
import './Navi.css';

class Navi extends React.Component {
  render() {
    return <div className='navi'>
      <a href="#" className='menu-btn'>
        <span className='burger'></span>
      </a>
    </div>
  }
}

export default Navi;
