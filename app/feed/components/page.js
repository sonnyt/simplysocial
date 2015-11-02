import React, { Component, PropTypes } from 'react';
import Masonry from 'masonry';
import { connect } from 'react-redux';
import Post from './post';

var imagesloaded = require('imagesloaded');

export class Page extends Component {
    /**
     * Filter posts based on format
     * @return {Array}
     */
    posts() {
        var posts = this.props.posts,
            response = (post) => <Post post={post} key={post.id} />;

        if (this.props.route.format) {
            return posts.filter((post) => post.format === this.props.route.format ? post : null).map(response)
        } else {
            return posts.map(response)
        }
    }

    /**
     * When component updated
     */
    componentDidUpdate() {
        // update masonry
        this.masonry.reloadItems();
        this.masonry.layout();
    }

    /**
     * When component is mounted
     */
    componentDidMount() {
        // start masonry
        this.masonry = new Masonry('.post-list', {
            columnWidth: '.post-sizer',
            itemSelector: '.post-item',
            percentPosition: true,
        })

        // wait for images to load
        imagesloaded('.post-list', () => this.masonry.layout())
    }

    render() {
        return (
            <section className={this.props.feedState.layout === 'tile' ? 'container' : 'content clearfix'}>
                <ul className={`post-list ${this.props.feedState.layout}`}>
                    <li className="post-sizer"></li>
                    {this.posts()}
                </ul>
            </section>
        )
    }
}

Page.propTypes = {
    layout: PropTypes.string,
    posts: PropTypes.array.isRequired
}

Page.defaultProps = {
    layout: 'list'
}

export default connect((state) => {
    return { posts: state.posts }
})(Page)
