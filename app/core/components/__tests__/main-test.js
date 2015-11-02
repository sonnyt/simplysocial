var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');

const MainComponent = require('../main');

describe('Main', () => {
    var component, renderedDOM;

    beforeEach(() => {
        let navigation = [
            { title: 'Link One' },
            { title: 'Link Two' },
            { title: 'Link Three' },
        ];

        let options = [
            { id: 'list', optionClassName: 'list' },
            { id: 'tile', optionClassName: 'tile' },
        ];

        let clickFunc = () => {};

        component = TestUtils.renderIntoDocument(
            <MainComponent
            navigation={navigation}
            optionsOnClick={clickFunc}
            addPost={clickFunc}
            options={options} />
        );

        renderedDOM = () => ReactDOM.findDOMNode(component);
    });

    it('should exists', () => {
        expect(TestUtils.isCompositeComponent(component)).toBeTruthy();
    });

    it('should add navigation links', () => {
        let links = renderedDOM().querySelectorAll('.navigation a');
        expect(links.length).toEqual(3);
    });

    it('should add options links', () => {
        let links = renderedDOM().querySelectorAll('.options a');
        expect(links.length).toEqual(2);
    });

    it('should have navigation builder', () => {
        expect(component.navigation).toExist();
    });

    it('should have options builder', () => {
        expect(component.options).toExist();
    });
});
