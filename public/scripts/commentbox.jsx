import React from 'react';
import CommentList from "./commentlist.jsx";
import CommentForm from "./commentform.jsx";
import $ from "jquery";

class CommentBox extends React.Component {


  constructor(){
    super();
    this.state = { data : [] };
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
            <div className="commentbox">
              <h1>Comments {this.state.data.length}</h1>
              <CommentList data={this.state.data} deleteComment={this.deleteComment.bind(this)} updateComment={this.updateComment.bind(this)}/>
              <CommentForm submitForm={this.handleSubmitForm.bind(this)}/>
            </div>
          )
   }

   handleSubmitForm(author, text) {
      
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            type: "POST",
            data: {author : author, text : text},
            cache: false,
            success: function(data) {
              this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
              console.error(this.props.url, status, err.toString());
            }.bind(this)
          });
   }
   deleteComment(id) {

      $.ajax({
            url: this.props.url + "/" + id,
            dataType: 'json',
            type: "DELETE",
            cache: false,
            success: function(data) {
              this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
              console.error(this.props.url, status, err.toString());
            }.bind(this)
          });
   }
   updateComment(id, text){

      $.ajax({
            url: this.props.url + "/" + id,
            dataType: 'json',
            type: "PUT",
            data : {text : text},
            cache: false,
            success: function(data) {
              this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
              console.error(this.props.url, status, err.toString());
            }.bind(this)
          });
   }
}

export default CommentBox