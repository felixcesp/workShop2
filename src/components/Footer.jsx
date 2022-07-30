
import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { NavBarStyled } from '../styles/Styles';





class Footer extends Component {
    render() {
        return (
            <div>
                <NavBarStyled>
                   <Link to='/home'>home</Link>
                   <Link to='/home'>Buscar</Link>
                   <Link to='/quizz'>Alertas</Link>
                   <Link to='/home'>User</Link>
                </NavBarStyled>
            </div>
        );
    }
}

export default Footer;