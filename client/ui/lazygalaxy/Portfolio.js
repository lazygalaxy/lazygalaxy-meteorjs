import React from 'react'

export default React.createClass({
    render() {
        return (
            <section id="portfolio" className="bg-light-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2 className="section-heading">Portfolio</h2>
                            <h3 className="section-subheading text-muted">Here are some examples of the work LazyGalaxy has been involved with. Current projects are all open source, so please feel free to browse the github repositories!</h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <a href="http://www.gopredict.com" className="portfolio-link" data-toggle="modal">
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content">
                                        <i className="fa fa-link fa-3x"></i>
                                    </div>
                                </div>
                                <img src="portfolio/gopredict/logo.png" className="img-responsive" alt=""/>
                            </a>
                            <div className="portfolio-caption">
                                <h4>GoPredict</h4>
                                <ul className="list-inline social-buttons">
                                    <li>
                                        <a href="http://www.gopredict.com">
                                            <i className="fa fa-link"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://github.com/lazygalaxy/sport-meteorjs">
                                            <i className="fa fa-github"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/gopredict">
                                            <i className="fa fa-facebook"></i>
                                        </a>
                                    </li>
                                </ul>
                                <p className="text-muted">GoPredict is a social sports prediction network. Challenge other users in the Euro2016 competition and become a prediction wizard!</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <img src="portfolio/mytravel/logo.png" className="img-responsive" alt=""/>
                            <div className="portfolio-caption">
                                <h4>MyTravel</h4>
                                <ul className="list-inline social-buttons">
                                    <li>
                                        <a href="https://github.com/lazygalaxy/travel-meteorjs">
                                            <i className="fa fa-github"></i>
                                        </a>
                                    </li>
                                </ul>
                                <p className="text-muted">Keep track of places when you travel. Places you have seen and places you would like to see.</p>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-6 portfolio-item">
                            <img src="portfolio/drquizo/logo.png" className="img-responsive" alt=""/>
                            <div className="portfolio-caption">
                                <h4>DrQuizo</h4>
                                <ul className="list-inline social-buttons">
                                    <li>
                                        <a href="https://github.com/lazygalaxy/language-meteorjs">
                                            <i className="fa fa-github"></i>
                                        </a>
                                    </li>
                                </ul>
                                <p className="text-muted">A quiz based game that allows you to improve your strength on spoken languages, geography or other custom content you choose to add.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
})
