import React from 'react';
import ReactDOM from 'react-dom';
import CommentBox from './commentbox.jsx';

require("../styles/main.css");
ReactDOM.render(<CommentBox url="/api/comments" pollInterval={2000}/>, document.getElementById('content'));