import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Tags from '../components/Tags';
import Image from '../components/Image';
import Ingredients from '../components/Ingredients';
import Instructions from '../components/Instructions';

export default class Details extends React.Component {
  render() {
    return (
      <section className="recipe-view">
        <Header title="crumble"/>
        
        <div className="container">

          <div className="row">
            <div className="col s12 m10 offset-m1 l8 offset-l2">
              <div className="card">
                <Title className="card-title" title="crumble" />
                <Tags tags={["fruit", "sweets", "dessert"]} />
                <div className="card-image">
                  <Image source="../../src/img/sample-2.JPG" />
                </div>
                <div className="card-content">
                  <h4>
                    Ingredients:
                  </h4>
                  <Ingredients />
                  <h4>
                    Instructions:
                  </h4>
                  <Instructions />
                </div>
                <div className="card-action">
                  <a href="#">edit</a>
                  <a href="#">delete</a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}