import React, {Component} from 'react';
import PropTypes from 'prop-types'; 
import './style.css';

class Comments extends Component {

  constructor(props){
    super();
    this.state = {comment: ""};
  }
  submitComment = (e) => {
    e.preventDefault();
    this.props.postComment(this.state.comment);
  }
  handleChange = (e) => this.setState({comment: e.target.value});

  render(){
    const commentsList = this.props.comments.map((comment) => 
      <div className="comment-container" key={`comment_${comment.id}`}>
        <img className="comments-profile-pic" alt="menu-profile-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Duck_wings_outstretched.jpg/1200px-Duck_wings_outstretched.jpg"/>
        <div className="comment" key={'comment_' + comment.id}>
          <h2 className="comment-user">{comment.user}</h2>
          <h3 className="comment-date">{comment.date}</h3>
          <p className="comment-text">{comment.text}</p>
        </div>
      </div>);

    return (
    <div className="book-comments">
      <h1 className="comments-title">Comentarios</h1>
      <div className="comment-container">
        <img className="comments-profile-pic" alt="menu-profile-pic" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Duck_wings_outstretched.jpg/1200px-Duck_wings_outstretched.jpg"/>
        <form className="add-comment">
          <h2 className="add-comment-title">Agregar comentario</h2>
          <input type="text" className="add-comment-input" onChange={this.handleChange}/>
          <button className="add-comment-submit" onClick={this.submitComment}>Enviar</button>
        </form>
      </div>
      {commentsList}
    </div>
    )}
  }

Comments.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
    id: PropTypes.number,
    user: PropTypes.string,
    date: PropTypes.date,
    text: PropTypes.text    
  }))
}

export default Comments;