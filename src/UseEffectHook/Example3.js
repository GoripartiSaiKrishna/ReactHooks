import React, {useState, useEffect} from 'react'

export default function Example3(){
    const [resourceType, setResourceType] = useState('posts')

    console.log('render')

    useEffect( () => {
        console.log('Resource type changed')
    }, [resourceType])

    return(
        <>
            <div>
                <button onClick={() => setResourceType('posts')}>posts</button>
                <button onClick={() => setResourceType('users')}>Users</button>
                <button onClick={() => setResourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
        </>
    )
}
