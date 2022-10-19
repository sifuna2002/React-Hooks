import React, { useEffect } from 'react'
import './UseEffect.css'

function UseEffect() {
    const [resourceType, setResourceType] = React.useState('posts')
    const [items, setItems] = React.useState([])
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])
    
  return (
    <div>
        <h1>Use Effect Hook</h1>
        <div className='resources'>
            <button onClick={() => setResourceType('posts')}>Posts</button>
            <button onClick={() => setResourceType('users')}>Users</button>
            <button onClick={() => setResourceType('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        {items.slice(0,5).map(item => {
            return <pre>{JSON.stringify(item)}</pre>
        })}
        <h1>Window Width</h1>
        <h2>{windowWidth}</h2>
    </div>
  )
}

export default UseEffect