import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Tags from '../components/Tags';
import Image from '../components/Image';
import Ingredients from '../components/Ingredients';
import Instructions from '../components/Instructions';
import {saveRecipe} from '../logic.js';

export default class Edition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      tags: [],
      image: "",
      ingredients: "",
      instructions: ""
    };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onIngredientsChange = this.onIngredientsChange.bind(this);
    this.onInstructionsChange = this.onInstructionsChange.bind(this);
    this.saveRecipe = this.saveRecipe.bind(this);
  }
  saveRecipe(e) {
    e.preventDefault();
    saveRecipe(this.state);
  }
  onTitleChange(event) {
    this.setState({
      name: event.target.value
    });
  }
  onIngredientsChange(event) {
    this.setState({
      ingredients: event.target.value
    });
  }
  onInstructionsChange(event) {
    this.setState({
      instructions: event.target.value
    });
  }
  componentDidMount() {
    $('.chips').material_chip({
      placeholder: '+Tag',
      secondaryPlaceholder: '+Tag'
    });
    /*saveRecipe({name: "salad", tags: ["veggies", "healthy"], ingredients: "something", instructions: "sth else"});*/
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
                      <Title editable="true" onChange={this.onTitleChange} />
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
                          <Ingredients editable="true" onChange={this.onIngredientsChange} />
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="col s12">
                          <Instructions editable="true" onChange={this.onInstructionsChange} />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
      
                <div className="card-action">
                  <a href="#" onClick={this.saveRecipe}>save</a>
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