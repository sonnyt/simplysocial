import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ComposeForm from '../../feed/components/compose-form';

class Compose extends Component {
    /**
     * Close modal
     */
    handleClose() {
        document.body.className = document.body.className.replace(' modal-open', '');
    }

    /**
     * Add post handler
     * @param {String} text
     */
    addPost(text) {
        this.handleClose()
        this.props.addPost(text)
    }

    render() {
        return (
            <div className="modal compose-modal">
                <div className="modal-content">
                    <a className="modal-close" onClick={this.handleClose}>&times;</a>
                    <h3>Create new message</h3>
                    <ComposeForm layout="textarea" addPost={this.addPost.bind(this)} />
                </div>
            </div>
        )
    }
}

Compose.propTypes = {
    addPost: PropTypes.func.isRequired
}

export default Compose
