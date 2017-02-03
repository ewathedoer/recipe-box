import React from 'react';
import HomeCard from '../components/HomeCard';
import Header from '../components/Header';
import AddButton from '../components/AddButton';
import {Link} from 'react-router';
import {recipeList} from '../logic.js';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.renderHomeCards = this.renderHomeCards.bind(this);
    let list = recipeList();
    this.state = {
      recipes: list
    };
  }
  renderHomeCards() {
    let result = [];
    for (let i=0; i<this.state.recipes.length; i++) {
      let recipeItem = this.state.recipes[i];
      result.push(
        <div className="col s6 m4 l3" key={i}>
          <HomeCard title={recipeItem.name} image={recipeItem.image} />
        </div>
      )
    }
    if (result.length === 0) {
      return (<p className="empty-state-text">Add a new recipe with plus button.</p>);
    }
    return result;
  }
  render() {
    return (
      <section className="homepage">
        <Header />
        
        <div className="container">
          <div className="row">
            {this.renderHomeCards()}
          </div>
          <Link to="addition">
            <AddButton />
          </Link>
        </div>
      
      </section>
    );
  }
}
