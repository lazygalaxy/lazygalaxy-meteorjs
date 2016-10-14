import React from 'react'
import NavLink from '../NavLink'
import Navigation from './Navigation'
import Home from './Home'
import Services from './Services'
import Portfolio from './Portfolio'
import About from './About'
import Footer from './Footer'

export default React.createClass({
    render() {
        return (
            <div>
                <Navigation/>
                <Home/>
                <Services/>
                <Portfolio/>
                <About/>
                <Footer/> {/* <ul role="nav">
                    <li>
                        <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/recipe">Recipe App</NavLink>
                    </li>
                </ul>
                {this.props.children} */}
            </div>
        )
    }
})
