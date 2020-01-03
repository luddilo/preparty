import React from 'react'
import Page from "../layouts/Page"
import PortfolioItem from '../components/PortfolioItem'
import portfolio from "../data/portfolio.json"

const PortfolioPage = () => (
    <Page title="Portfolio" pageRef="portfolio">
        <h1>Sample projects</h1>

        <p>Below is a few of the projects we've done, in previous employments and as consultants</p>
        {portfolio.map((item, key) =>
            <PortfolioItem key={"portfolio" + key} {...item} />
        )}

    </Page>
)

export default PortfolioPage