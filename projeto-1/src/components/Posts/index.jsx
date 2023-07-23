import {PostCard} from '../PostCard/index'

export const Posts = ({posts})=>{
    return(
    <section className='container'>
        <div className='posts'>
          {posts.map(post=>(
            <PostCard
              key = {post.id}
              post = {post}
            />
            
          ))}
        </div>
      </section>
    )
}