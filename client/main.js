//import react libs
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router'

//import react components
import App from './ui/lazygalaxy/App';
import Home from './ui/lazygalaxy/Home';
import About from './ui/lazygalaxy/About';

import RecipeApp from './ui/recipe/App';
import RecipeHome from './ui/recipe/Home';
import RecipeAbout from './ui/recipe/About';
import RecipeRepo from './ui/recipe/Repo';
import RecipeRepos from './ui/recipe/Repos';

/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({target: '.navbar-fixed-top'})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

Meteor.startup(() => {
    render((
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="/about" component={About}/>
            </Route>
            <Route path="/recipe" component={RecipeApp}>
                <IndexRoute component={RecipeHome}/>
                <Route path="/recipe/about" component={RecipeAbout}/>
                <Route path="/recipe/repos" component={RecipeRepos}>
                    <Route path="/recipe/repos/:userName/:repoName" component={RecipeRepo}/>
                </Route>
            </Route>
        </Router>
    ), document.getElementById('render-target'));
});
