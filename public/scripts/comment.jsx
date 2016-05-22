import React from "react";
import $ from "jquery";

class Comment extends React.Component{

	constructor() {
		super();
		this.state = {editing : false, text : "" };
	}
	render() {
		return (
				<div className="comment">
			        <h2 className="commentAuthor">
			          {this.props.author}
			          
			          
			          {(() => {
				        if(!this.state.editing){
				        	return (
				        			<div>
				        				<b>{this.props.children}</b>
				        				<button onClick={this.changeToEditing.bind(this)}>Edit</button>
				        				<button onClick={this.deleteComment.bind(this, this.props.id)}>Delete</button>
				        			</div>
				        			);
				        		   
				        }else{
				        	return (
				        			<div>
				        				<input value={this.state.text} onChange={this.updateText.bind(this)}/>
				        				<button onClick={this.update.bind(this)}>Update</button>
				        				<button onClick={this.changeToNoEditing.bind(this)}>Cancel</button>
				        			</div>
				        		   );
				        }
					})()}
					
			        </h2>
			     </div>
			   );
	}
	deleteComment(id) {

		this.props.deleteComment(id);
	}
	changeToEditing() {

		this.setState({editing : true, text : this.props.children});
	}
	changeToNoEditing() {

		this.setState({editing : false, text : ""});
	}
	update() {

		this.props.updateComment(this.props.id, this.state.text);
		this.setState({editing : false, text : "" });
	}
	updateText(e) {
		this.setState({text : e.target.value});
	}
}

export default Comment