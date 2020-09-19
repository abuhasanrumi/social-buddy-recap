import React, { useEffect, useState } from 'react';

const Comment = (props) => {

    // User image extraction
    const [userImg, setUserImg] = useState([])

    useEffect(() => {
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => setUserImg(data.results))
    }, [])

    const img = userImg.map(img => img.picture.large)
    

    const {name, email, body, id} = props.comment;

    return (
        <div>
            <div className="insideBody" style={{backgroundColor: '#f7d794'}}>
                <div className="image">
                    <img src={img} alt=""/>
                </div>
                <div className="postDescription">
                    <h4>{name}</h4>
                    <p>Email: {email}</p>
                    <p>{body}</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;