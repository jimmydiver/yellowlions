import React, {useState, useEffect} from "react";
import axios from "axios";
import PostListItem from "./PostListItem"
import Post from "./Post"


class BlogScreen extends React.Component {

  state = {
    posts: []
  };

  componentDidMount(){
    this.getPosts();
  }
  
  async getPosts(){
    const res = await axios.get("http://localhost:3002/posts/");
    this.setState({ posts: res.data});
  }

 
  renderList(){
    	return this.state.posts.map(post => {
        return(
          <PostListItem post = {post}  key ={post._id}/>
        );  
    });
  }

  render(){  
    return <div>
      {this.renderList()}
    </div>;
 }
}


// const BlogScreen = () => {
//   let isAdmin;

//   const [state, setState] = useState({
//     profileLoaded: false,
//     errors: [],
//     success: false,
//     preloader: false,
//   });
//   useEffect(() => {
//     // If the profile data is not loaded
//     if (!state.profileLoaded) {
//       // fetch the data from backend
//       fetch("http://localhost:3002/users/find", {
//         method: "POST",
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         body: {},
//       })
//         .then((response) => {
//           console.log("response", response);
//           return response.json();
//         })
//         .then((profile) => {
//           // Once data is loaded, change profileLoaded to true and
//           // change the state to populate the form fields
//           setState({
//             ...state,
//             profileLoaded: true,
//             id:profile[0]._id,
//           });
//         })
//         .catch((e) => console.log("e", e));
//     }
//   }, [state.profileLoaded]);
//   if (state.id === "5f84531694093369d408402b") {
//     isAdmin = true;
//   }

//   return (
//     <div className="screen">
//       <h1>Blog</h1>
//       {isAdmin && (<button className='btn btn-primary'>New post</button>)}
//     </div>
//   );
// };

export default BlogScreen;
