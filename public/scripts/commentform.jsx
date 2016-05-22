import React from "react";
import $ from "jquery";

class CommentForm extends React.Component{

	constructor(){
		super();
		this.state = {author: '', text: ''};
	}
	render(){
		return (
				<form className="commentForm">
			        <input type="text" placeholder="Your name" value={this.state.author} onChange={this.updateAuthor.bind(this)}/>
			        <input type="text" placeholder="Say something..." value={this.state.text} onChange={this.updateText.bind(this)} />
			        <button onClick={this.handleSubmit.bind(this)}>Post</button>
			    </form>
			   )
	}
	updateText(e) {
		this.setState({text: e.target.value});
	}
	updateAuthor(e) {
		this.setState({author: e.target.value});
	}
	handleSubmit(e){
		e.preventDefault();
		if(this.state.author && this.state.text){
			this.props.submitForm(this.state.author, this.state.text);
			this.setState({author: '', text: ''});
		}else{
			return;
		}
	}
}
	
export default CommentForm