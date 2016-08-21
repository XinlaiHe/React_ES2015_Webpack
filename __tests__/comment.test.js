jest.unmock('../public/scripts/comment.jsx');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Comment from '../public/scripts/comment.jsx';

describe("Component tests", function () {
 
    it("comment component should have comment div", function () {

        var comment = TestUtils.renderIntoDocument(
         <Comment />
        );
        var commentDiv = TestUtils.findRenderedDOMComponentWithClass(comment ,"comment");

        expect(commentDiv).not.toBeNull();

    });
});