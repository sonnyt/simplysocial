import React, { Component, PropTypes } from 'react';

class Post extends Component {
    render() {
        var post = this.props.post;

        return (
            <li className="post-item">
                <article className="post-item-content clearfix">
                    <div className="post-item-avatar">
                        <img src={post.user.avatar} />
                    </div>
                    <div className="post-item-body">
                        <h3>
                            {post.user.name}
                            <small><i className="icon-reply"></i> <i className="icon-heart"></i> {post.date}</small>
                        </h3>
                        <p>{post.body}</p>
                    </div>
                </article>
                { post.image ? <div className="post-item-image"><img src={post.image} /></div> : ''}
            </li>
        )
    }
}

Post.propTypes = {
    post: PropTypes.object.isRequired
}

export default Post;
