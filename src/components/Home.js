import React, { Component } from "react";
import Title from "./Title";
import axios from "axios";
import Header from "./Header";
import Photomain from "./Photomain";
import DeliverooCard from "./DeliverooCard";
import Panier from "./Panier";

class Home extends Component {
  state = {
    restaurant: {},
    brunch: [],
    petitdej: []
  };

  render() {
    const brunch = [];
    for (let i = 0; i < this.state.brunch.length; i++) {
      brunch.push(
        <DeliverooCard
          title={this.state.brunch[i].title}
          description={this.state.brunch[i].description}
          price={this.state.brunch[i].price + " €"}
          picture={this.state.brunch[i].picture}
        />
      );
    }

    const petitdej = [];
    for (let i = 0; i < this.state.petitdej.length; i++) {
      petitdej.push(
        <DeliverooCard
          title={this.state.petitdej[i].title}
          description={this.state.petitdej[i].description}
          price={this.state.petitdej[i].price + " €"}
          picture={this.state.petitdej[i].picture}
          popular={this.state.petitdej[i].popular}
        />
      );
    }

    if (this.state.brunch.length === 0) {
      return null;
    }

    return (
      <div>
        <div>
          <Header />
          <div className="wrapper-white">
            <div className="wraprow1">
              <div className="restaurantrow">
                <div className="textrow">
                  <Title text={this.state.restaurant.name} />
                  <p className="textDescription">
                    {this.state.restaurant.description}
                  </p>
                </div>
                <Photomain url={this.state.restaurant.picture}> </Photomain>
              </div>
            </div>
          </div>
        </div>

        <div className="wrapblock">
          <Title text="Brunchs" />

          <div className="brunchrow">
            {brunch}
            <Panier text="Valider mon panier" status="panier vide" />{" "}
          </div>
          <Title text="Petit déjeuner" />

          <div className="petitdejblock"> {petitdej}</div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    axios
      .get(
        "https://s3-eu-west-1.amazonaws.com/lereacteurapp/react/deliveroo/deliveroo-cart.json"
      )
      .then(response => {
        this.setState({
          restaurant: response.data.restaurant,
          brunch: response.data.menu.Brunchs,
          petitdej: response.data.menu["Petit déjeuner"]
        });
      });
  }
}

export default Home;
