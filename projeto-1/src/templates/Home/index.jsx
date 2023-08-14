import { useEffect, useState, useCallback } from 'react';
import{loadPosts} from '../../utils/load-posts'
import { Posts } from '../../components/Posts';
import { Button } from '../../components/Button';
import '../../styles/global-styles.css'
import { SearchInput } from '../../components/SearchInput';


export const Home = () =>{

  const [posts, setPosts] = useState([])
  const [allPosts, setAllPosts] = useState([])
  const [page, setPage] = useState(0)
  const [postsPerPage] = useState(10)
  const [searchValue, setSearchValue] = useState('')


  const noMorePosts = page + postsPerPage >= allPosts.length

  const filteredPosts = !!searchValue ? 
    allPosts.filter(post=>{
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()
      )
    }) 
    : posts


  const handleLoadPosts = useCallback(async (page, postsPerPage) =>{
    const postsAndPhotos = await loadPosts()

    setPosts(postsAndPhotos.slice(page, postsPerPage + page))
    setAllPosts(postsAndPhotos)
  },[])

  const loadMorePosts = ()=>{
    
    const nextPage = page + postsPerPage
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage)

    posts.push(...nextPosts)

    setPosts(posts)
    setPage(nextPage)

  }

  const handleChange = (e)=>{
    const { value } = e.target
    setSearchValue(value)
  }

  useEffect(()=>{
    handleLoadPosts(0, postsPerPage)
  },[handleLoadPosts, postsPerPage])

  return(
    <section className='container'>
      
      <SearchInput
        searchValue={searchValue}
        handleChange={handleChange}
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
            onClick = {loadMorePosts}
            disabled = {noMorePosts}  
          />
        </div>
      )}
      
    </section>
   
  )
}


export default Home;
