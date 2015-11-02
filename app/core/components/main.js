/**
 * Main Component
 */
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import ComposeForm from '../../feed/components/compose-form';

class Main extends Component {
    /**
     * Navigation menu items
     */
    navigation() {
        if (!this.props.navigation) return;

        return this.props.navigation.map((item, key) => {
            return (
                <li key={item.title}>
                    {item.href ? <Link to={item.href} activeClassName="active">{item.title}</Link> : <a>{item.title}</a>}
                </li>
            )
        })
    }

    /**
     * Options menu items
     */
    options() {
        if (!this.props.options) return;

        return this.props.options.map((item, key) => {
            return (
                <li key={item.id}>
                    <a className={item.optionClassName}
                        onClick={this.props.optionsOnClick.bind(this.props.optionsOnClick, item.id)}
                    >{item.id}</a>
                </li>
            )
        })
    }

    render() {
        return (
            <main className="hero">
                <div className="content">
                    <div className="compose">
                        <ComposeForm layout="inline" addPost={this.props.addPost} />
                    </div>
                </div>
                <nav>
                    <div className="content">
                        <ul className="navigation">
                            {this.navigation()}
                        </ul>
                        <ul className="options">
                            {this.options()}
                        </ul>
                    </div>
                </nav>
            </main>
        )
    }
}

/**
 * Set prop types
 * @type {Object}
 */
Main.propTypes = {
    navigation: PropTypes.array,
    options: PropTypes.array,
    addPost: PropTypes.func,
    optionsOnClick: PropTypes.func,
}

export default Main
