import React from 'react';
import Image from '../components/Image';
import Title from '../components/Title';
import {Link} from 'react-router';

export default class HomeCard extends React.Component {
  render() {
    return (
      <Link to="details">
        <div className="card">
          <div className="card-image">
            <Image className="home-img" source="img/sample.JPG" alt={this.props.title} />
            <Title className="title" title={this.props.title}/>
          </div>
        </div>
      </Link>
    );
  }
}