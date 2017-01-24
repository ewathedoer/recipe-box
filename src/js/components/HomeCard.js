import React from 'react';
import Image from '../components/Image';
import Title from '../components/Title';
import {Link} from 'react-router';

export default class HomeCard extends React.Component {
  render() {
    return (
      <Link to={"details/" + this.props.title}>
        <div className="card">
          <div className="card-image">
            <Image className="home-img" source={this.props.image} alt={this.props.title} />
            <Title className="title" title={this.props.title}/>
          </div>
        </div>
      </Link>
    );
  }
}