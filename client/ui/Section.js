import React from 'react'

export default class Section extends React.Component {
    render() {
        return (
            <section id={this.props.id} className="bg-light-gray">
                <div className="container">
                    {this.props.children}
                </div>
            </section>
        )
    }
}

Section.propTypes = {
    id: React.PropTypes.string.isRequired
};
