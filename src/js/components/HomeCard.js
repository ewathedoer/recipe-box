import React from 'react';
import Image from '../components/Image';
import Title from '../components/Title';

export default class HomeCard extends React.Component {
  render() {
    return (
      <a href="http://theonewhodo.es">
        <div className="card">
          <div className="card-image">
            <Image className="home-img" source="img/sample.JPG" alt={this.props.title} />
            <Title className="title" title={this.props.title}/>
          </div>
        </div>
      </a>
    );
  }
}