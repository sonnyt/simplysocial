var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');

const ComposeFormComponent = require('../compose-form');

describe('Feed Compose Form', () => {
    var component, renderedDOM;

    beforeEach(() => {
        let clickFunc = () => {};

        component = TestUtils.renderIntoDocument( <ComposeFormComponent layout="inline" addPost={clickFunc} /> );
        renderedDOM = () => ReactDOM.findDOMNode(component);
    });

    it('should exists', () => {
        expect(TestUtils.isCompositeComponent(component)).toBeTruthy();
    });

    it('should have on change handler', () => {
        expect(component.onChange).toExist();
    });

    it('should have on submit handler', () => {
        expect(component.handleSubmit).toExist();
    });
});
