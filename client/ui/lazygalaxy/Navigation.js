import React from 'react'

export default React.createClass({
    render() {
        //should be added to css
        var divStyle = {
            height: 50
        };

        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    {/* Brand and toggle get grouped for better mobile display */}
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a href="#page-top" className="navbar-left"><img src="logo.png" style={divStyle}/></a>
                        <a className="navbar-brand page-scroll" href="#page-top">LazyGalaxy</a>
                    </div>

                    {/* Collect the nav links, forms, and other content for toggling */}
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li className="hidden">
                                <a href="#page-top"></a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#services">Services</a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#portfolio">Portfolio</a>
                            </li>
                            <li>
                                <a className="page-scroll" href="#about">About</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
})
