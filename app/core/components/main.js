import React from 'react';
import { Link } from 'react-router'

class Main extends React.Component {
    navigation() {
        return this.props.navigation.map((item, key) => {
            return (
                <li key={item.title}>
                    <Link to={item.href} activeClassName="active">{item.title}</Link>
                </li>
            )
        })
    }

    render() {
        return (
            <main className="hero">
                <div className="content">test</div>
                <nav>
                    <div className="content">
                        <ul>
                            {this.navigation()}
                        </ul>
                    </div>
                </nav>
            </main>
        )
    }
}

export default Main
