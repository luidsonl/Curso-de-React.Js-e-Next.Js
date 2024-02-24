import { Outlet } from 'react-router-dom'
import './style.css'

export const Posts = ()=>{


  return(
    <div>
      <h1>Blog de posts</h1>
      <Outlet/>
    </div>
  )
}