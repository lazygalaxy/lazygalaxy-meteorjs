import React from 'react'

//shared components
import NavLink from '../NavLink'
import Navigation from '../Navigation'

//lazygalaxy components
import Home from './Home'
import ServicesSection from './ServicesSection'
import PortfolioSection from './PortfolioSection'
import AboutSection from './AboutSection'
import Footer from './Footer'

export default React.createClass({
    render() {
        let serviceSection = new Navigation.Section("services", "Services");
        let portfolioSection = new Navigation.Section("portfolio", "Portfolio");
        let aboutSection = new Navigation.Section("about", "About");

        return (
            <div>
                <Navigation title="LazyGalaxy" sections={[serviceSection, portfolioSection, aboutSection]}/>
                <Home/>
                <ServicesSection sectionId={serviceSection.id}/>
                <PortfolioSection sectionId={portfolioSection.id}/>
                <AboutSection sectionId={aboutSection.id}/>
                <Footer/>
            </div>
        )
    }
})
