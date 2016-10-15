import React from 'react'

//shared components
import NavLink from '../NavLink'
import Navigation from '../Navigation'

//lazygalaxy components
import Home from './Home'
import Services from './Services'
import Portfolio from './Portfolio'
import About from './About'
import Footer from './Footer'

export default React.createClass({
    render() {
        let serviceSectionId = "services";
        let portfolioSectionId = "portfolio";
        let aboutSectionId = "about";

        let sections = [
            new Navigation.Section(serviceSectionId, "Services"),
            new Navigation.Section(portfolioSectionId, "Portfolio"),
            new Navigation.Section(aboutSectionId, "About")
        ];

        return (
            <div>
                <Navigation title="LazyGalaxy" sections={sections}/>
                <Home/>
                <Services sectionId={serviceSectionId}/>
                <Portfolio sectionId={portfolioSectionId}/>
                <About sectionId={aboutSectionId}/>
                <Footer/>
            </div>
        )
    }
})
