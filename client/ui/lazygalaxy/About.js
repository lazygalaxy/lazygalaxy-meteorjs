import React from 'react'

export default React.createClass({
    render() {
        return (

            <section id="about" className="bg-light-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">About</h2>
                            <h3 className="section-subheading text-muted">Currently LazyGalaxy consists of a single member. Additional resources are carefully sourced from Upwork.com when needed, a global freelancing platform.</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <div className="team-member">
                                <img src="about/vangos.jpg" className="img-responsive img-circle" alt=""/>
                                <h4>Evangelos Papakonstantis</h4>
                                <p className="text-muted">Founder & Software Engineer</p>
                                <p className="text-muted">More information about Evangelos can be found on the following social platform links. Please use any of these links if you would like to get in touch.</p>
                                <ul className="list-inline social-buttons">
                                    <li>
                                        <a href="https://ch.linkedin.com/in/epapa">
                                            <i className="fa fa-linkedin"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/lazygalaxy">
                                            <i className="fa fa-github"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/lazygalaxy">
                                            <i className="fa fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/lazygalaxy/">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mailto:vangos@lazygalaxy.com">
                                            <i className="fa fa-envelope"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
            </section>
        )
    }
})
