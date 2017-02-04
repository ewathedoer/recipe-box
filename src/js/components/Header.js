import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          {this.props.title ? (
            <div>
              <ul className="left back">
                <li>
                  <Link to="/"><i className="material-icons back-arrow">trending_flat</i></Link>
                </li>
              </ul>
              <h1 className="brand-logo subpage">{this.props.title}</h1>
            </div>
          ) : (
            <Link to="/" className="brand-logo">Recipe Box</Link>
          )}
        </div>
      </nav>
    );
  }
}