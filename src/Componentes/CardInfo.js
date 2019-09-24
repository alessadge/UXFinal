
import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";

class CardInfo extends Component {
    renderCard(card) {
        return (
            <Card>
                <CardImg src={card.image} alt={card.name} />
            </Card>
        );
    }

    renderInfo(card) {
        return (
            
                <div class="card" >
                    <img class="card-img-top" class="rounded" class="img-responsive" src={card.image} alt="Card image" width="460" height="600"></img>
                    <div class="card bg-secondary text-white">
                        <h4 class="card-title">{card.name}</h4>
                        <h6>Edad:<small>  {card.edad}</small></h6>
                        <h5>Raza:<small>  {card.raza}</small></h5>
                        <p class="card-text">{card.description}</p>
                    </div>
                </div>
          
        );
    }
    render() {
        const card = this.props.card;
        if (card != null)
            return (
                <div class="carta">
                    {this.renderInfo(card)}
                </div>
            );
        else return <div />;
    }
}

export default CardInfo;