import './App.css';
import { Component } from 'react';
import{loadPosts} from './utils/load-posts'
import { Posts } from './components/Posts';



class App extends Component{
  state = {
    posts:[]
  }
  async componentDidMount(){
    await this.loadPosts()
  }

  loadPosts = async () =>{
    const postsAndPhotos = await loadPosts()
    this.setState({posts: postsAndPhotos})
  }

  render(){
    const {posts} = this.state;

    return(
     <Posts posts={posts}/>
    )
  }
}

export default App;
