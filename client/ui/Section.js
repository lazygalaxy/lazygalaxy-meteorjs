import React from 'react'

export default class Section extends React.Component {
    render() {
        return (
            <section id={this.props.sectionId} className="bg-light-gray">
                <div className="container">
                    {this.props.children}
                </div>
            </section>
        )
    }
}

Section.propTypes = {
    sectionId: React.PropTypes.string
};
