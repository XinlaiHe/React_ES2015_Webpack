import React from 'react';

class CommentBox extends React.Component {


  constructor(){
    super();
    this.state = { count : 0 };
  }
  render() {

   return (
            <div className="commentbox" onClick={this.handleClick.bind(this)}>
              hello react & es2015 & webpack! {this.state.count}
            </div>
          )
   }
   handleClick() {
    this.setState({state : this.state.count++});
   }
}

export default CommentBox