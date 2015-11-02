var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');

const SettingsComponent = require('../settings');

describe('User Settings', () => {
    var component, renderedDOM;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument( <SettingsComponent /> );
        renderedDOM = () => ReactDOM.findDOMNode(component);
    });

    it('should exists', () => {
        expect(TestUtils.isCompositeComponent(component)).toBeTruthy();
    });

    it('should add account fields', () => {
        let fields = renderedDOM().querySelectorAll('.form-input');
        expect(fields.length).toEqual(4);
    });

    it('should add notification fields', () => {
        let fields = renderedDOM().querySelectorAll('.toggle');
        expect(fields.length).toEqual(4);
    });

    it('should add privacy fields', () => {
        let fields = renderedDOM().querySelectorAll('.check-cricle');
        expect(fields.length).toEqual(5);
    });
});
