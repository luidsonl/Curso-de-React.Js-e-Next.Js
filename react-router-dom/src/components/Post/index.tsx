import { useParams, useSearchParams } from 'react-router-dom'
import './style.css'

export const Post = ()=>{
  const params = useParams()
  const {id} = params
  const[qs]= useSearchParams()

  return(
    <div>
      <h1>Post {id}, param: {qs.get('param')}</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio nostrum dicta doloribus, explicabo ut itaque! Ipsa ea molestias iure magni. 
        Vitae asperiores maiores praesentium nihil quas, officiis laborum molestiae quis.</p>
    </div>
  )
}