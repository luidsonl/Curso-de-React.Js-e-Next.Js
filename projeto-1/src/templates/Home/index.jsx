import { Component } from 'react';
import{loadPosts} from '../../utils/load-posts'
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
//import '../../styles/global-styles.css'



class Home extends Component{
  state = {
    posts:[],
    allPosts: [],
    page: 0,
    postsPerPage: 10,
  }
  async componentDidMount(){
    await this.loadPosts()
  }

  loadPosts = async () =>{
    const {page, postsPerPage} = this.state
    const postsAndPhotos = await loadPosts()
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage + page),
      allPosts: postsAndPhotos
    })
  }

  loadMorePosts = ()=>{
    const {
      posts,
      allPosts,
      page,
      postsPerPage,
    } = this.state
    
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

    posts.push(...nextPosts)

    this.setState({posts, page: nextPage})
  }

  render(){
    const {posts, allPosts, page, postsPerPage} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length

    return(
      <section className='container'>
        <Posts 
          posts={posts}
        />
        <div className='button-container'>
          <Button 
            text="Carregar mais" 
            onClick = {this.loadMorePosts}
            disabled = {noMorePosts}  
          />
        </div>
      </section>
     
    )
  }
}

export default Home;
