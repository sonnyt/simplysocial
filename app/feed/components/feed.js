import React from 'react';
import { connect } from 'react-redux';
import Main from '../../core/components/main';

import '!style!css!sass!../scss/style.scss';

class Feed extends React.Component {
    navigation() {
        return [
            { title: 'All Posts', href: '/feed/all' },
            { title: 'Photos', href: '/feed/photos' },
            { title: 'Videos', href: '#' },
        ]
    }

    render() {
        return (
            <div>
                <Main navigation={this.navigation()}/>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default connect((state) => {
    return { posts: state.posts }
})(Feed)
