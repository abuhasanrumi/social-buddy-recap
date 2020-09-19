import React, { useEffect, useState } from 'react';
import SinglePost from '../SinglePost/SinglePost';
import './Posts.css'

const Posts = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])
    
    return (
        <div className="singlePosts">
            {
                posts.map(post => <SinglePost post={post}></SinglePost>)
            }
        </div>
    );
};

export default Posts;