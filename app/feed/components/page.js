import React from 'react';
import { connect } from 'react-redux';
import Post from './post';

class Page extends React.Component {
    posts() {
        var posts = this.props.posts,
            filterByFormat = (post) => {
                if (post.format === this.props.route.format) {
                    return post
                }
            },
            response = (post) => {
                return <Post post={post} key={post.id} />;
            }

        if (this.props.route.format) {
            return posts.filter(filterByFormat).map(response);
        } else {
            return posts.map(response);
        }
    }

    render() {
        return (
            <div>
                <ul className="post-list">
                    {this.posts()}
                </ul>
            </div>
        )
    }
}

export default connect((state) => {
    return { posts: state.posts }
})(Page)
