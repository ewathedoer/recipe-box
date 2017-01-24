import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Tags from '../components/Tags';
import Image from '../components/Image';
import Ingredients from '../components/Ingredients';
import Instructions from '../components/Instructions';
import {Link} from 'react-router';
import {loadRecipe} from '../logic.js';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    let recipe = loadRecipe(this.props.params.recipe);
    this.state = {
      recipe: recipe
    };
  }
  render() {
    return (
      <section className="recipe-view">
        <Header title="crumble"/>
        
        <div className="container">

          <div className="row">
            <div className="col s12 m10 offset-m1 l8 offset-l2">
              <div className="card">
                <Title className="card-title" title={this.state.recipe.name} />
                <Tags tags={this.state.recipe.tags} />
                <div className="card-image">
                  <Image alt={this.state.recipe.name} source={this.state.recipe.image} />
                </div>
                <div className="card-content">
                  <h4>
                    Ingredients:
                  </h4>
                  <Ingredients ingredients={this.state.recipe.ingredients} />
                  <h4>
                    Instructions:
                  </h4>
                  <Instructions instructions={this.state.recipe.instructions} />
                </div>
                <div className="card-action">
                  <Link to={"edition/" + this.state.recipe.name}>
                    edit
                  </Link>
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