import React from 'react';
import CommentList from "./commentlist.jsx";
import CommentForm from "./commentform.jsx";
import $ from "jquery";

class CommentBox extends React.Component {


  constructor(){
    super();
    this.state = { count : 0, data : [] };
  }

  loadCommentsFromServer() {
    $.ajax({
      url: this.props.url,
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }
  componentDidMount() {
    this.loadCommentsFromServer();
    setInterval(this.loadCommentsFromServer.bind(this), this.props.pollInterval);
  }

  render() {

   return (
            <div className="commentbox" onClick={this.handleClick.bind(this)}>
              <h1>Comments {this.state.count}</h1>
              <CommentList data={this.state.data}/>
              <CommentForm url="/api/comments"/>
            </div>
          )
   }
   handleClick() {
    this.setState({state : this.state.count++});
   }
}

export default CommentBox