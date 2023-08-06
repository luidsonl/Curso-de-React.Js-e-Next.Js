import { Component } from 'react';
import{loadPosts} from '../../utils/load-posts'
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import '../../styles/global-styles.css'
import { SearchInput } from '../../components/SearchInput';



class Home extends Component{
  state = {
    posts:[],
    allPosts: [],
    page: 0,
    postsPerPage: 4,
    searchValue: '',
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

  handleChange = (e)=>{
    const { value } = e.target
    this.setState({searchValue: value})
  }

  render(){
    const {posts, allPosts, page, postsPerPage, searchValue} = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length

    const filteredPosts = !!searchValue ? 
    allPosts.filter(post=>{
      return post.title.toLowerCase().includes(
        searchValue.toLocaleLowerCase()
      )
    }) 
    : posts

    return(

      <section className='container'>
        
        <SearchInput
          searchValue={searchValue}
          handleChange={this.handleChange}
        />

       
        <Posts 
          posts={filteredPosts}
        />
        {!filteredPosts.length &&(
          <p>Sem resultados</p>
        )}
        {!searchValue &&(
          <div className='button-container'>
            <Button 
              text="Carregar mais" 
              onClick = {this.loadMorePosts}
              disabled = {noMorePosts}  
            />
          </div>
        )}
        
      </section>
     
    )
  }
}

export default Home;
