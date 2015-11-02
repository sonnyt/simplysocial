var React = require('react');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');

const NavBarComponent = require('../navbar');

describe('NavBar', () => {
    var component, renderedDOM;

    beforeEach(() => {
        component = TestUtils.renderIntoDocument( <NavBarComponent /> );
        renderedDOM = () => ReactDOM.findDOMNode(component);
    });

    it('should exists', () => {
        expect(TestUtils.isCompositeComponent(component)).toBeTruthy();
    });

    it('should have compose handler', () => {
        expect(component.handleCompose).toExist();
    });

    it('should open modal', () => {
        component.handleCompose();
        expect(document.body.className).toEqual(' modal-open');
        document.body.className = '';
    });
});
