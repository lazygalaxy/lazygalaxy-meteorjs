import React from 'react'
import NavLink from '../NavLink'

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Recipe</h1>
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
