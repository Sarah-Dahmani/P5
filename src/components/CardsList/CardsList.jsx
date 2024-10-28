import React, { Component } from 'react';
import Card from './Card/Card';
import './CardsList.scss';
import logements from '../../data/logements.json';

class CardsList extends Component { 

  constructor(props) {
    super(props);

    this.state = {
      cards: logements
    };
  }

  render () {
    return (
      <div className="CardsListWrapper">
      {
        this.state.cards.map( (logement) => {
          return (
            <Card key={logement.id} id={logement.id} titre={logement.titre} couverture={logement.couverture} />
          )
        })
      }
      </div>
    );
  }
}

export default CardsList;