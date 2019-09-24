import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Filter from "./Filter";
import CardInfo from "./CardInfo";
import { CARDS } from "../non-components/profilecard.js";


class Perfil extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cards: CARDS,
            selectedCard: null,
            cardFilter: null
        };
    }

    cardSelect(cardId) {
        this.setState({ selectedCard: cardId });
    }

    render() {
        return (
            <div className="row">
                <div className="col-sm-6 text-light">
                    <div>
                        <h1>.</h1>
                        <h1>.</h1>
                        <Filter
                            cards={this.state.cards}
                            cardSelect={cardId => this.cardSelect(cardId)}
                            filter={this.state.cardFilter}
                            cardFilterSelect={filterName => this.cardFilterSelect(filterName)}
                        />
                    </div>
                </div>
                <div class="col-sm-6 text-light">
                    <div>
                        <CardInfo
                            card={
                                this.state.cards.filter(
                                    card => card.id === this.state.selectedCard
                                )[0]
                            }
                        />
                    </div>
                </div>
            </div>


        );
    }
}


export default Perfil;