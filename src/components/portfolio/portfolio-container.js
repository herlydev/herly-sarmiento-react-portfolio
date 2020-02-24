import React, { Component } from 'react'

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    constructor() {
        super();

        this.state = {
            pageTitle: "Welcome to my portforlio",
            data: [
                {tittle: "Quip"},
                {title: "Eventbrite"}, 
                {title: "Ministry Safe"},
                {title: "SwingAway"}
            ]
        };

        this.handlePageTitleUpdate = this.handlePageTitleUpdate.bind(this)
    }
    portfolioItem() {
        return this.state.data.map(item => {
            return <PortfolioItem title={item.title} url={item.url} />;
        });
    }

    handlePageTitleUpdate() {
        this.setState({
            pageTitle: "Something else"
        }) 
    }
    render() {
        return (
            <div >
                <h2>{this.state.pageTitle}</h2>
                {this.portfolioItem()}

                <hr/>
                <button onClick={this.handlePageTitleUpdate}>Change Title</button>
            </div>
        )
    }
}
