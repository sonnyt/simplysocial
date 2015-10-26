import React from 'react';

class Post extends React.Component {
    render() {
        var post = this.props.post;

        return (
            <li className="post-item">
                <div className="post-item-content clearfix">
                    <div className="post-item-avatar">
                        <img src={post.user.avatar} />
                    </div>
                    <div>
                        <h3>{post.user.name}</h3>
                        <p>{post.body}</p>
                    </div>
                </div>
                { post.image ? <div className="post-item-image"><img src={post.image} /></div> : ''}
            </li>
        )
    }
}

Post.propTypes = {
    post: React.PropTypes.element.isRequired
};

export default Post;
