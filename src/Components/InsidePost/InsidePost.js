import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link, useParams } from 'react-router-dom';
import './InsidePost.css'
import Comment from '../Comment/Comment';

const InsidePost = () => {
    const {id} = useParams();

    // User info extraction
    const [user, setUser] = useState([])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    }, [])

    const {title, body, userId} = user;
    
    // Comment extraction

    const [comment,  setComment] = useState([])

    useEffect(() => {
        const commentUrl = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(commentUrl)
        .then(res => res.json())
        .then(data => setComment(data))
    }, [])

    // User image extraction
    const [userImg, setUserImg] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => setUserImg(data.results))
    }, [])

    const img = userImg.map(img => img.picture.large)

    
    return (
        <div>
            <div className="homeButton">
                <Link to="/home" style={{textDecoration: "none", color: 'white'}}><Button variant="contained" color="primary">Go back to Posts</Button></Link>
            </div>
            <div className="insideBody">
                <div className="image">
                    <img src={img} alt=""/>
                </div>
                <div className="postDescription">
                    <p>User ID: {userId}</p>
                    <p>Post ID: {id}</p>
                    <h4>{title}</h4>
                    <p>{body}</p>
                </div>
            </div>

            <div className="comments">
                <h1>Comments</h1>
                {
                    comment.map(cm => <Comment comment={cm}></Comment>)
                }
            </div>
        </div>
    );
};

export default InsidePost;