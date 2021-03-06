import React from "react"

class PostListItem extends React.Component{
    constructor (props){
        super(props);
        this.onShowPost = this.onShowPost.bind(this);
        }

    onShowPost(){
        window.location.pathname = `blog/posts/${this.props.post._id}`;
    }

    renderDate(dateString){
        const date = new Date(dateString);
    
        return `${date.getDate()}/${date.getMonth()}/${date.getMonth()}`;
      }
    
      renderTags(tags){
        return tags.map(tag => {
          return <span key={tag}> {tag} </span>
        })
      }

    render(){
        const { post } = this.props;
        return( 
        <button onClick={this.onShowPost}>
            <h3> {post.title} </h3>
            <span>{this.renderDate(post.createdAt)}</span>
          <div>{this.renderTags(post.tags)}</div>
          </button>
        );
    }
}

export default PostListItem;