import React from "react";
import Comment from "./comment.jsx";

class CommentList extends React.Component{

	render() {
		let comments = this.props.data.map(function(comment){
			return (
					<Comment author={comment.author} id={comment.id} deleteComment={this.deleteComment.bind(this)} updateComment={this.updateComment.bind(this)}>
						{comment.text}
					</Comment>
				   );
		}.bind(this));
		return (
				<div className="commentList">
			       {comments}
			    </div>
			   );
	}
	deleteComment(id) {
		
		this.props.deleteComment(id);
	}
	updateComment(id, text){

		this.props.updateComment(id, text);
	}
}

export default CommentList