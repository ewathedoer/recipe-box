import React from 'react';
import Header from '../components/Header';
import Title from '../components/Title';
import Tags from '../components/Tags';
import Photo from '../components/Photo';
import Ingredients from '../components/Ingredients';
import Instructions from '../components/Instructions';
import {loadRecipe,saveRecipe} from '../logic.js';

export default class Edition extends React.Component {
  constructor(props) {
    super(props);
    if (this.props.params.recipe) {
      let recipe = loadRecipe(this.props.params.recipe);
      this.state = {
        editingName: this.props.params.recipe,
        recipe: recipe
      };
    }
    else {
      this.state = {
        editingName: null,
        recipe: {
          name: "",
          tags: [],
          image: "",
          ingredients: "",
          instructions: ""
        }
      };
    }
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onImageChange = this.onImageChange.bind(this);
    this.onIngredientsChange = this.onIngredientsChange.bind(this);
    this.onInstructionsChange = this.onInstructionsChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  componentDidMount() {
    if (this.state.editingName) {
      Materialize.updateTextFields();
    }
  }
  onClickSave(e) {
    e.preventDefault();
    $('.card-action .btn').addClass('disable');
    let emptyFields = [];
    for (let key in this.state.recipe) {
      if (this.state.recipe.hasOwnProperty(key) && this.state.recipe[key] == "") {
        emptyFields.push(key);
      }
    }
    if (emptyFields.length>0) {
      let alertMessage = $(".alert");
      alertMessage.addClass("visible");
      alertMessage.find("span").text(emptyFields.join(", "));
      $('.card-action .btn').removeClass('disable');
    } else {
      saveRecipe(this.state.recipe, this.state.editingName);
      $('.card-action .btn').removeClass('disable');
      this.props.router.push('/');
    }
  }
  onTitleChange(event) {
    this.setState({
      recipe: Object.assign(this.state.recipe, {
        name: event.target.value
      })
    });
  }
  onTagsChange(tagsList) {
    let tags = [];
    for (let i=0; i<tagsList.length; i++) {
      tags.push(tagsList[i].tag);
    }
    this.setState({
      recipe: Object.assign(this.state.recipe, {
        tags: tags
      })
    });
  }
  onImageChange(image) {
    this.setState({
      recipe: Object.assign(this.state.recipe, {
        image: image
      })
    });
  }
  onIngredientsChange(event) {
    this.setState({
      recipe: Object.assign(this.state.recipe, {
        ingredients: event.target.value
      })
    });
  }
  onInstructionsChange(event) {
    this.setState({
      recipe: Object.assign(this.state.recipe, {
        instructions: event.target.value
      })
    });
  }
  render() {
    return (
      <section className="edition-view">
        <Header title={this.state.editingName ? "edit a recipe" : "create a recipe"}/>
        <div className="container">
          <div className="row">
            <div className="col s12 m10 offset-m1 l8 offset-l2">
              <div className="card">
                <div className="card-title">
                  <div className="row">
                    <div className="col s12">
                      <Title title={this.state.recipe.name} editable="true" onChange={this.onTitleChange} />
                    </div>
                  </div>
                </div>
                <Tags tags={this.state.recipe.tags} editable="true" onChange={this.onTagsChange} />
                <div className="card-image">
                  <Photo source={this.state.recipe.image} editable="true" onChange={this.onImageChange} />
                </div>
                <div className="card-content">
                  <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="col s12">
                          <Ingredients ingredients={this.state.recipe.ingredients} editable="true" onChange={this.onIngredientsChange} />
                        </div>
                      </div>
                    </form>
                  </div>

                  <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="col s12">
                          <Instructions instructions={this.state.recipe.instructions} editable="true" onChange={this.onInstructionsChange} />
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                
                <div className="alert">
                  <h2>
                    The following fields: <span></span> must be filled in to save a recipe.
                  </h2>
                </div>
      
                <div className="card-action">
                  <a href="#" className="btn save-btn" onClick={this.onClickSave}>save</a>
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