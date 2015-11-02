var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react/lib/ReactTestUtils');
var expect = require('expect');

const PostComponent = require('../post');

describe('Feed Post', () => {
    var component, renderedDOM;

    let post = {
            id: 0,
            body: 'Etiam fermentum scelerisque efficitur.',
            format: 'text',
            date: '3m',
            user: {},
        };

    beforeEach(() => {
        component = TestUtils.renderIntoDocument( <PostComponent post={post} /> );
        renderedDOM = () => ReactDOM.findDOMNode(component);
    });

    it('should exists', () => {
        expect(TestUtils.isCompositeComponent(component)).toBeTruthy();
    });

    it('should create post', () => {
        expect(renderedDOM()).toExist();
    });
});
