import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FirstBu, FirstCont, FirstImg } from '../styles/Styles';

class First extends Component {
    render() {
        return (
            <FirstCont>
                <h1>Welcome to social media</h1>
                < FirstImg src="https://res.cloudinary.com/felixces/image/upload/v1657846396/samples/imagecon-group.jpg" alt="" />
                <FirstBu><Link to='/login'>Next</Link></FirstBu>
            </FirstCont>
        );
    }
}

export default First;