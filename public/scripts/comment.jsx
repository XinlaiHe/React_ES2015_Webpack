import React from "react";
import $ from "jquery";

class Comment extends React.Component{

	render() {
		return (
				<div className="comment">
			        <h2 className="commentAuthor">
			          {this.props.author}
			          <b>{this.props.children}</b>
			          <button>Edit</button>
			          <button onClick={this.deleteComment.bind(this, this.props.id)}>Delete</button>
			        </h2>
			     </div>
			   );
	}
	deleteComment(id) {
		this.props.deleteComment(id);
	}
}

export default Comment