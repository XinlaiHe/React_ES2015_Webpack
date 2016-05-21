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
	handleSubmit(e) {
		e.preventDefault();
		
		if(this.state.author && this.state.text){
			$.ajax({
		      url: this.props.url,
		      dataType: 'json',
		      type: "POST",
		      data: this.state,
		      cache: false,
		      success: function(data) {
		        this.setState({author: '', text: ''});
		      }.bind(this),
		      error: function(xhr, status, err) {
		        console.error(this.props.url, status, err.toString());
		      }.bind(this)
		    });
		}else{
			return;
		}
	}

}
	
export default CommentForm