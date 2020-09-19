import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

const Error = () => {
    const errorStyle={
        textAlign: "center"
    }
    return (
        <div style={errorStyle} className="error">
            <h1>Error 404</h1>
            <h3>Sorry, nothing is here. </h3>
            <br/>
            <Button variant="contained" color="primary"><Link to="/home" style={{textDecoration: 'none', color: 'white'}}>Go back to Home</Link></Button>
        </div>
    );
};

export default Error;