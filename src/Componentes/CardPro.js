import React, { Component } from "react";
import { Card, CardImg } from "reactstrap";

class CardPro extends Component {
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
                    
                    <div class="card bg-secondary text-white">
                        <h4 class="card-title">{card.name}</h4>
                        <h6>email:<small>  {card.email}</small></h6>
                        <h5>Phone Number:<small>  {card.phonenumber}</small></h5>
                        <h5>Descripcion</h5>
                        <h6>edad:<small>  {card.edad}</small></h6>
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

export default CardPro;