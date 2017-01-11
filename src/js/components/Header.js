import React from 'react';
import Search from '../components/Search';

export default class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo">Recipe Box</a>
          <Search />
        </div>
      </nav>
    );
  }
}