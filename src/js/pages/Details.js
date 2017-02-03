import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Tags from '../components/Tags';
import Photo from '../components/Photo';
import Ingredients from '../components/Ingredients';
import Instructions from '../components/Instructions';
import {Link} from 'react-router';
import {loadRecipe,deleteRecipe} from '../logic.js';

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    let recipe = loadRecipe(this.props.params.recipe);
    this.state = {
      recipe: recipe
    };
    this.onClickDelete = this.onClickDelete.bind(this);
  }
  onClickDelete(e) {
    e.preventDefault();
    if (!confirm('Are you sure you want to delete this recipe?')) {
      return;
    }
    deleteRecipe(this.state.recipe.name);
    this.props.router.push('/');
  }
  render() {
    return (
      <section className="recipe-view">
        <Header title={this.state.recipe.name} />
        
        <div className="container">

          <div className="row">
            <div className="col s12 m10 offset-m1 l8 offset-l2">
              <div className="card">
                <Title className="card-title" title={this.state.recipe.name} />
                <Tags tags={this.state.recipe.tags} />
                <div className="card-image">
                  <Photo alt={this.state.recipe.name} source={this.state.recipe.image} />
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
                  <a href="#" onClick={this.onClickDelete}>
                    delete
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    );
  }
}