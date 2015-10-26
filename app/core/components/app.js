import React from 'react';
import { connect } from 'react-redux';
import Nav from './navbar';
import Footer from './footer';

import '!style!css!sass!../scss/style.scss';

class App extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                {this.props.children}
                <Footer/>
            </div>
        )
    }
}

export default connect((state) => {
    return { posts: state.posts }
})(App)
