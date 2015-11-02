var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');

const FooterComponent = require('../footer');

describe('Footer', () => {
    var component, renderedDOM;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument( <FooterComponent /> );
        renderedDOM = () => ReactDOM.findDOMNode(component);
    });

    it('should exists', () => {
        expect(TestUtils.isCompositeComponent(component)).toBeTruthy();
    });

    it('add links', () => {
        let links = renderedDOM().querySelectorAll('a');
        expect(links.length).toEqual(4);
    });
});
