/**
 * App Component
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Nav from './navbar';
import Footer from './footer';
import Compose from '../../feed/components/compose';
import * as FeedActions from '../../feed/actions/posts'

// load styles
import '!style!css!sass!../scss/style.scss';

export class App extends Component {
    render() {
        return (
            <section>
                <Nav/>
                {this.props.children}
                <Footer/>
                <Compose addPost={this.props.actions.addPost} />
            </section>
        )
    }
}

/**
 * Set prop types
 * @type {Object}
 */
App.propTypes = {
  posts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default connect((state) => {
    return { posts: state.posts }
}, (dispatch) => {
    return { actions: bindActionCreators(FeedActions, dispatch) }
})(App)
