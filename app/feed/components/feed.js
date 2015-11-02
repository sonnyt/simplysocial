import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Main from '../../core/components/main';
import * as FeedActions from '../actions/posts';

import '!style!css!sass!../scss/style.scss';

export class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = { layout: 'list' }
    }

    /**
     * Navigations menu items
     * @return {Array}
     */
    navigation() {
        return [
            { title: 'All Posts', href: '/feed/all' },
            { title: 'Photos', href: '/feed/photos' },
            { title: 'Videos' },
        ]
    }

    /**
     * Options menu items
     * @return {Array}
     */
    options() {
        return [
            { id: 'list', optionClassName: 'list' },
            { id: 'tile', optionClassName: 'tile' },
        ]
    }

    /**
     * Trigger when masonry layout
     * @param  {String} layout
     */
    handleChangeLayout(layout) {
        this.setState({ layout: layout })
    }

    render() {
        return (
            <section>
                <Main navigation={this.navigation()}
                      options={this.options()}
                      optionsOnClick={this.handleChangeLayout.bind(this)}
                      addPost={this.props.actions.addPost}
                />
                {React.cloneElement(this.props.children, {feedState: this.state})}
            </section>
        )
    }
}

export default connect((state) => {
    return { posts: state.posts }
}, (dispatch) => {
    return { actions: bindActionCreators(FeedActions, dispatch) }
})(Feed)
