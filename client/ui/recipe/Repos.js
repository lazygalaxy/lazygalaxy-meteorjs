import React from 'react'
import NavLink from '../NavLink'
import Section from '../Section'

export default React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },

    handleSubmit(event) {
        event.preventDefault()
        const userName = event.target.elements[0].value
        const repo = event.target.elements[1].value
        const path = `/recipe/repos/${userName}/${repo}`
        this.context.router.push(path)
    },

    render() {
        return (
            <Section sectionId="repos">
                <div className="row">
                    <h2>Repos</h2>
                    <ul>
                        <li>
                            <NavLink to="/recipe/repos/reactjs/react-router">React Router</NavLink>
                        </li>
                        <li>
                            <NavLink to="/recipe/repos/facebook/react">React</NavLink>
                        </li>
                        <li>
                            <form onSubmit={this.handleSubmit}>
                                <input type="text" placeholder="userName"/>
                                / {' '}
                                <input type="text" placeholder="repo"/>{' '}
                                <button type="submit">Go</button>
                            </form>
                        </li>
                    </ul>
                    {this.props.children}
                </div>
            </Section>
        )
    }
})
