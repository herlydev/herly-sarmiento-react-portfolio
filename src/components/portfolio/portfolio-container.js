import React, { Component } from 'react'

import PortfolioItem from "./portfolio-item"

export default class PortfolioContainer extends Component {
    constructor() {
        super()
        console.log("Portfolio container has rendered")
    }
    portfolioItem() {
        const data = ["Quip", "Eventbrite", "Ministry Safe", "SwingAway"];

        return data.map(items => {
            return <PortfolioItem />
        })
    }

    render() {
        return (
            <div >
                <h2>Portfolio items go here...</h2>
                {this.portfolioItem()}
            </div>
        )
    }
}