/**
 * Settings Component
 */
import React, { Component } from 'react';

import '!style!css!sass!../scss/style.scss';

class Settings extends Component {
    /**
     * Notification fields
     * @return {Array}
     */
    notification() {
        let fields = [
            {
                checked: true,
                text: 'email me when my posts are is favorited',
            },
            {
                checked: true,
                text: 'email me when I’m mentioned',
            },
            {
                checked: true,
                text: 'email me when I get a reply',
            },
            {
                checked: false,
                text: 'email me when someone follows me',
            },
        ]

        return fields.map((field, key) => this.checkbox('toggle', field))
    }

    /**
     * Privacy fields
     * @return {Array}
     */
    privacy() {
        let fields = [
            {
                checked: true,
                text: 'only allow people I follow to tag me',
            },
            {
                checked: false,
                text: 'don’t allow anyone to tag me',
            },
            {
                checked: false,
                text: 'add a  location to my posts',
            },
            {
                checked: true,
                text: 'let others find me by my email address',
            },
            {
                checked: true,
                text: 'tailor ads based on my information',
            },
        ]

        return fields.map((field, key) => this.checkbox('check-cricle', field))
    }

    /**
     * Checkbox field template
     * @param  {String} type  checkbox types
     * @param  {Object} field field
     */
    checkbox(type, field) {
        return (
            <div key={field.text} className="form-group">
                <label className={type}><input type="checkbox" defaultChecked={field.checked} /><i></i></label>
                <span>{field.text}</span>
            </div>
        )
    }

    render() {
        return (
            <section className="user-settings">
                <div className="content">
                    <h3 className="page-title">Settings</h3>
                    <form>
                        <section className="clearfix">
                            <strong className="section-title">Account</strong>
                            <div className="avatar">
                                <img src="http://lorempixel.com/85/85/people/5" />
                                <button className="button button-small" disabled>Change</button>
                            </div>
                            <div className="basic-info">
                                <div className="form-group">
                                    <div className="form-input-group">
                                        <i className="user-icon"></i>
                                        <input type="text" className="form-input" defaultValue="Jessica Tuan" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-input-group">
                                        <i className="envelope-icon"></i>
                                        <input type="email" className="form-input" defaultValue="jessica@mail.com" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-input-group">
                                        <i className="lock-icon"></i>
                                        <input type="password" className="form-input" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-input-group">
                                        <i className="lock-icon"></i>
                                        <input type="password" className="form-input" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <hr />
                        <section>
                            <strong className="section-title">Notification</strong>
                            {this.notification()}
                        </section>
                        <hr />
                        <section>
                            <strong className="section-title">Privacy</strong>
                            {this.privacy()}
                        </section>
                        <hr />
                        <button className="button">Save Changes</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Settings
