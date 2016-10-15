import React from 'react'
import Section from '../Section'

export default React.createClass({
    render() {
        return (
            <Section id="services">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="section-heading">Services</h2>
                        <h3 className="section-subheading text-muted">LazyGalaxy follows a disciplined software development process that iteratively applies three phases: Planning, Building and Deployment. The philosophy is to work on smaller manageable targets that will be delivered in the short term, rather than setting long term targets that complicate deliveries and expectations.</h3>
                    </div>
                </div>
                <div className="row text-center">
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-calendar fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Planning</h4>
                        <p className="text-muted">Thorough planning takes place with clients by identifying what can realistically be delivered in the short term, always keeping in mind long term goals. Planned deliverables are chosen based on client value and ideally will never exceed a one month time window for delivery.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-laptop fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Building</h4>
                        <p className="text-muted">Resources are pulled together to work on deliverables, following agile development methadologies. The focus of this phase is to deliver exaclty what has been agreed upon in the planning phase, using best programming practices and always respecting deadlines.</p>
                    </div>
                    <div className="col-md-4">
                        <span className="fa-stack fa-4x">
                            <i className="fa fa-circle fa-stack-2x text-primary"></i>
                            <i className="fa fa-cloud fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 className="service-heading">Deployment</h4>
                        <p className="text-muted">Once deliverables have been built, they are deployed in the cloud to allow clients to immediatly see the results of the iteration. This is the phase that involves clients in the development process by constantly providing feedback that aligns a project with the client vision.</p>
                    </div>
                </div>
            </Section>
        )
    }
})
