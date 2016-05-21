import React from "react";
import Comment from "./comment.jsx";

class CommentList extends React.Component{

	render() {
		let comments = this.props.data.map(function(comment){
			return (
					<Comment author={comment.author} key={comment.id}>
						{comment.text}
					</Comment>
				   );
		})
		return (
				<div className="commentList">
			       {comments}
			    </div>
			   );
	}
}

export default CommentList