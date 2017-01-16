import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Tags from '../components/Tags';
import Image from '../components/Image';
import Ingredients from '../components/Ingredients';
import Instructions from '../components/Instructions';

export default class Edition extends React.Component {
  componentDidMount() {
    $('.chips').material_chip({
      placeholder: '+Tag',
      secondaryPlaceholder: '+Tag'
    });
  }
  render() {
    return (
      <section className="edition-view">
        <Header title="create a recipe"/>
        <div className="container">
          <div className="row">
            <div className="col s12 m10 offset-m1 l8 offset-l2">
              <div className="card">
                <div className="card-title">
                  <div className="row">
                    <div className="col s12">
                      <Title editable="true" />
                    </div>
                  </div>
                </div>
                <Tags editable="true" />
                <div className="card-image">
                  <Image editable="true" />
                </div>
                <div className="card-content">
                  <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="col s12">
                          <Ingredients editable="true" />
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="col s12">
                          <Instructions editable="true" />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
      
                <div className="card-action">
                  <a href="#">save</a>
                  <a href="#">cancel</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}