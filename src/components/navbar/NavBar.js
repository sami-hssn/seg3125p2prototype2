import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './NavBar.css';
import { BunnyIcon, Hamburger, Close } from '../svg';

function NavBar(){

    const location = useLocation();

    const [ isOpen, setIsOpen ] = useState( false );

    return(

        <header className='nav-wrapper'>
            <div className='upper-nav-container'>
                <Link 
                    to="/" 
                    relative='path' 
                    className='nav-icon'
                >
                    <BunnyIcon />
                </Link>
                <Link to="/" relative='path' className='main-link'>
                    audio.fm
                </Link>

                <div className='nav-cta-container desktop-nav'>
                    <Link to="/login" relative='path'>
                        Login
                    </Link>
                    <Link to="/signup" relative='path'>
                        Sign up
                    </Link>
                </div>
                <button 
                    className='hamburger-toggle' 
                    onClick={() => {

                        setIsOpen( !isOpen )
                    
                    }}
                >
                    <Hamburger stroke="white"/>
                </button>
            </div>
            <Navbar expand='lg' className='desktop-nav'>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link 
                            as={Link} 
                            style={{ textDecoration: 'none' }} 
                            to="/"
                            className={ location.pathname === '/' ? 'current-nav-link' : null}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            style={{ textDecoration: 'none' }} 
                            to="/projects"
                            className={ location.pathname === '/projects' ? 'current-nav-link' : null}
                        >
                                Projects
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            style={{ textDecoration: 'none' }} 
                            to="/samples"
                            className={ location.pathname === '/samples' ? 'current-nav-link' : null}
                        >
                            Samples
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            style={{ textDecoration: 'none' }} 
                            to="/collaborate"
                            className={ location.pathname === '/collaborate' ? 'current-nav-link' : null}
                        >
                            Collaborate
                        </Nav.Link>
                        <Nav.Link 
                            as={Link} 
                            style={{ textDecoration: 'none' }} 
                            to="/tutorials"
                            className={ location.pathname === '/tutorials' ? 'current-nav-link' : null}
                        >
                            Tutorials
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            { isOpen ? 

                <div className='dropdown-menu'>
                    <ul>
                        <button 
                            className='close-btn' 
                            onClick={ () => {

                                setIsOpen( !isOpen )

                            } }
                        >
                            <Close stroke="black"/>
                        </button>
                        <li className='dropdown-main-li'>
                            <Link 
                                to="/"
                                relative='path'
                                onClick={ () => {

                                    setIsOpen( !isOpen )
    
                                } }
                            >
                                Home
                            </Link>
                        </li>
                        <li className='dropdown-main-li'>
                            <Link 
                                to="/projects"
                                relative='path'
                                onClick={ () => {

                                    setIsOpen( !isOpen )
    
                                } }
                            >
                                Projects
                            </Link>
                        </li>
                        <li className='dropdown-main-li'>
                            <Link 
                                to="/samples"
                                relative='path'
                                onClick={ () => {

                                    setIsOpen( !isOpen )
    
                                } }
                            >
                                Samples
                            </Link>
                        </li>
                        <li className='dropdown-main-li'>
                            <Link 
                                to="/collaborate"
                                relative='path'
                                onClick={ () => {

                                    setIsOpen( !isOpen )
    
                                } }
                            >
                                Collaborate
                            </Link>
                        </li>
                        <li className='dropdown-main-li'>
                            <Link 
                                to="/tutorials"
                                relative='path'
                                onClick={ () => {

                                    setIsOpen( !isOpen )
    
                                } }
                            >
                                Tutorials
                            </Link>
                        </li>
                        <div className='dropdown-user-cta'>
                            <li>
                                <Link 
                                    to="/login"
                                    relative='path'
                                    onClick={ () => {
    
                                        setIsOpen( !isOpen )
        
                                    } }
                                >
                                    Login
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/signup"
                                    relative='path'
                                    onClick={ () => {
    
                                        setIsOpen( !isOpen )
        
                                    } }
                                >
                                    Sign up
                                </Link>
                            </li>
                        </div>
                    </ul>
                </div>

            : null }
        </header>
    );
    
}

export default NavBar;