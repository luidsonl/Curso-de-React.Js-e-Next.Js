import './styles.css'

export const PostCard = ({id, cover, title, body}) =>{
    return(
        <div className='post-card'>
              <img src={cover} alt={title}></img>
              <div key={id} className='post-content'>
                <h1>{title} {id}</h1>
                <p >{body}</p>
              </div>
            </div>
    )
}