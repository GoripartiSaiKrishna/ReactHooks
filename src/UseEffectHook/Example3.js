import React, {useState, useEffect} from 'react'

export default function Example3(){
    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])

    console.log('render')

    useEffect( () => {
<<<<<<< HEAD
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
=======
        console.log('Resource type changed')
>>>>>>> 4e39bb0b9b210d1e212369c015bf50b1666c126e
    }, [resourceType])

    return(
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {items.map( item => {
                return <pre>{JSON.stringify(item)}</pre>
            })}
        </>
    )
}
