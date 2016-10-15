import React from 'react'
import NavLink from '../NavLink'
import Navigation from '../Navigation'

export default React.createClass({
    render() {
        let sections = [
            new Navigation.Section("About", "/recipe/about"),
            new Navigation.Section("Repos", "/recipe/repos"),
            new Navigation.Section("LazyGalaxy", "/")
        ];

        return (
            <div>
                <Navigation title="Recipe" sections={sections}/>

                <ul role="nav">
                    <li>
                        <NavLink to="/recipe" onlyActiveOnIndex>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/recipe/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/recipe/repos">Repos</NavLink>
                    </li>
                    <li>
                        <NavLink to="/">LazyGalaxy</NavLink>
                    </li>
                </ul>
                {this.props.children}
            </div>
        )
    }
})
