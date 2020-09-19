import React, { useEffect, useState } from 'react';
import './SinglePost.css'
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const SinglePost = (props) => {
    const {title, id, body} = props.post

    const [userImg, setUserImg] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => setUserImg(data.results))
    }, [])

    const img = userImg.map(img => img.picture.large)


    return (
        <div className="singlePost">
            <div className="image">
                <img src={img} alt=""/>
            </div>
            <div className="postDescription">
                <p>Post ID: {id}</p>
                <h4>{title}</h4>
                <p>{body}</p>
                <br/>
                <Link to={"posts/"+id} style={{textDecoration: "none", color: 'white'}}><Button variant="contained" color="primary">See Details</Button></Link>
            </div>
        </div>
    );
};

export default SinglePost;