import React, { Component, PropTypes } from 'react';

class ComposeForm extends Component {
    constructor(props) {
        super(props);
        this.state = { body: '' }
    }

    /**
     * Submit handler
     * @param  {Object} e
     */
    handleSubmit(e) {
        e.preventDefault()

        this.props.addPost(this.state.body)
        this.setState({ body: '' })
    }

    /**
     * On text field changed
     * @param  {Object} e
     */
    onChange(e) {
        this.setState({ body: e.target.value })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                {this.props.layout === 'inline' ?
                    <input type="text" onChange={this.onChange.bind(this)} value={this.state.body} placeholder="What’s on your mind?" /> :
                    <textarea className="form-input" onChange={this.onChange.bind(this)} defaultValue={this.state.body} ref="body"></textarea>
                }
                <div className="detials clearfix">
                    <a className="photo" href="#">Add Photo</a><a className="video" href="#">Add Video</a>
                    {this.props.layout === 'textarea' ? <button className="button">Post</button> : ''}
                </div>
            </form>
        )
    }
}

ComposeForm.propTypes = {
    layout: PropTypes.string,
    addPost: PropTypes.func.isRequired
}

export default ComposeForm;
