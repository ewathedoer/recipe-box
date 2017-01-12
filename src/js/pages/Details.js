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
                  <Ingredients ingredients={["1 tablespoon of butter", "1/2 cup almonds", "1 teaspoon of brown sugar", "1/2 cup oatmeal", "1/3 cup walnuts", "pear", "peach", "black raspberries"]} />
                  <h4>
                    Instructions:
                  </h4>
                  <Instructions instructions={"Crush almonds and knead the topping with the rest of topping ingredients. Cut fruits into smaller pieces. Put them into small ovenproof dishes. Cover the fruit with the topping. Bake about 30 minutes until the topping gets gold and the fruit boil in their juices. Serve hot with some good coffee or with ice cream. Share with those you love!"} />
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