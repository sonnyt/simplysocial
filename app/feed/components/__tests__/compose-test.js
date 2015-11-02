var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');

const ComposeComponent = require('../compose');

describe('Feed Compose Modal', () => {
    var component, renderedDOM;

    beforeEach(() => {
        let clickFunc = () => {};

        component = TestUtils.renderIntoDocument( <ComposeComponent addPost={clickFunc} /> );
        renderedDOM = () => ReactDOM.findDOMNode(component);
    });

    it('should exists', () => {
        expect(TestUtils.isCompositeComponent(component)).toBeTruthy();
    });

    it('should have close modal handler', () => {
        expect(component.handleClose).toExist();
    });

    it('should have add post handler', () => {
        expect(component.addPost).toExist();
    });

    it('should close modal window', () => {
        document.body.className += ' modal-open';
        component.handleClose();
        expect(document.body.className).toEqual('');
    });
});
