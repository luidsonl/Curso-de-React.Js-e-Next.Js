export const PostCard = ({post}) =>{
    console.log(post)
    return(
        <div className='post-card'>
              <img src={post.cover} alt={post.title}></img>
              <div key={post.id} className='post-content'>
                <h1>{post.title}</h1>
                <p >{post.body}</p>
              </div>
            </div>
    )
}