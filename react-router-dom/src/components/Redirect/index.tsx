import { useEffect, useState } from 'react'
import './style.css'
import { useNavigate } from 'react-router-dom'

export const Redirect = () => {
  const [time, setTime] = useState(3)
  const navigate = useNavigate()
  
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTime((prevTime) => prevTime - 1)
    }, 1000)

    if (time === 0) {
      navigate('/')
    }
    return () => {
      clearTimeout(timeoutId)
    }
  }, [navigate, time])

  return (
    <div>
      <h1>Redirect em {time} </h1>
    </div>
  )
}
