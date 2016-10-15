import React from 'react'
import Section from '../Section'

export default React.createClass({
    render() {
        return (
            <Section {...this.props}>
                <div className="row">
                    Recipe Home
                </div>
            </Section>
        )
    }
})
