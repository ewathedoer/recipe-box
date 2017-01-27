import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          {this.props.title ? (
            <div>
              <ul className="left back">
                <li><a href="#"><i className="material-icons back-arrow">trending_flat</i></a></li>
              </ul>
              <h1 className="brand-logo subpage">{this.props.title}</h1>
            </div>
          ) : (
            <a href="#" className="brand-logo">Recipe Box</a>
          )}
        </div>
      </nav>
    );
  }
}