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
        let sections = [
            new Navigation.Section("Services", "#services"),
            new Navigation.Section("Portfolio", "#portfolio"),
            new Navigation.Section("About", "#about")
        ];

        return (
            <div>
                <Navigation title="LazyGalaxy" sections={sections}/>
                <Home/>
                <Services/>
                <Portfolio/>
                <About/>
                <Footer/>
            </div>
        )
    }
})
