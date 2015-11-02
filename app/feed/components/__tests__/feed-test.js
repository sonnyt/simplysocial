var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');

let Component = require('../feed');
const FeedComponent = Component.Feed;

describe('Feed', () => {
    var component, renderedDOM;

    beforeEach(() => {
        let posts = [];
        let addPost = () => {};
        let actions = { addPost };

        component = TestUtils.renderIntoDocument(
            <FeedComponent posts={posts} actions={actions} addPost={addPost}>
                <div>unit testing</div>
            </FeedComponent>
        );
        renderedDOM = () => ReactDOM.findDOMNode(component);
    });

    it('should exists', () => {
        expect(TestUtils.isCompositeComponent(component)).toBeTruthy()
    });

    it('should have navigation menu list', () => {
        expect(component.navigation()).toBeA('array');
    });

    it('should have options menu list', () => {
        expect(component.options()).toBeA('array');
    });

    it('should have on layout change handler', () => {
        expect(component.handleChangeLayout).toExist();
    });
});
