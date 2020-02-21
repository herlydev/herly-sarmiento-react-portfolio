import React, { Component } from 'react'

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    constructor() {
        super()
        this.state = {
            pageTitle: "Welcome to my portforlio",
            data: [
                {tittle: "Quip"},
                {title: "Eventbrite"}, 
                {title: "Ministry Safe"},
                {title: "SwingAway"}
            ]
        };
    }
    portfolioItem() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} />;
        });
    }

    render() {
        return (
            <div >
                <h2>{this.state.pageTitle}</h2>
                {this.portfolioItem()}
            </div>
        )
    }
}
