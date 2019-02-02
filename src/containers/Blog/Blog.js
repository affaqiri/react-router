import React, { Component } from 'react';
import { Route } from "react-router-dom";
import './Blog.css';

import Posts from "./Posts/Posts";

class Blog extends Component {

    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New post</a></li>
                        </ul>
                    </nav>
                </header>
                {/* Painful commenting in JSX */}
                {/* Route is just another component which gets replaced with the JSX content inside render */}
                {/* Without exact, the path is used as prefix, so both / and /new-posts matches the route */}
                {/* <Route path="/" exact render={() => <h1>Home</h1>}/> */}
                
                {/* component property references a function or class component, this is the prefered method of loading components
                    although we can still use render to load components as well. */}
                <Route path="/" exact component={Posts}/>
            </div>
        );
    }

}

export default Blog;
