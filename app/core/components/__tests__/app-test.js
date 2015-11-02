var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');

let Component = require('../app');
const AppComponent = Component.App;

describe('App', () => {
    var component, renderedDOM;

    beforeEach(() => {
        let posts = [];
        let addPost = () => {};
        let actions = { addPost };

        component = TestUtils.renderIntoDocument( <AppComponent posts={posts} actions={actions} addPost={addPost} /> )
        renderedDOM = () => ReactDOM.findDOMNode(component);
    });

    it('should exists', () => {
        expect(TestUtils.isCompositeComponent(component)).toBeTruthy()
    });
});
