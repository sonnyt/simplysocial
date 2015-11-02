import React, { Component } from 'react';
import { Link } from 'react-router';

class Nav extends Component {
    /**
     * Compose action to add
     * modal open class to the body element
     */
    handleCompose() {
        document.body.className += ' modal-open';
    }

    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <Link to="/" className="logo">SimplySocial</Link>
                    <div className="right-nav">
                        <a onClick={this.handleCompose} className="compose">Compose</a>
                        <div className="search-bar"><input type="text" /><i></i></div>
                        <div className="user-profile">
                            <img src="http://lorempixel.com/40/40/people/5" className="avatar" />
                            <i></i>
                            <div className="sub-nav">
                                <ul>
                                    <li><a href="#">Profile</a></li>
                                    <li><a href="#">Followers</a></li>
                                    <li><a href="#">Following</a></li>
                                    <li><Link to="/settings">Settings</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Nav
