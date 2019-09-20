import React from 'react';
import { Link } from "react-router-dom";
import logo from '.././logo.svg';
import '.././App.css';
import "bootstrap/dist/css/bootstrap.min.css";


const Header = (props) => {

    return (
        <div className="App">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <header className="App-header">
                <a className="navbar-brand" href="https://reactjs.org/docs/hello-world.html" target="_blank">
                     <img src={logo} className="App-logo" alt="logo" />
                </a>
                <Link to="/" className="navbar-brand">{props.title}</Link>
            </header>
            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}
            {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
               <ul className="navbar-nav mr-auto alignRightMenu">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">{props.link1}</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">{props.link2}</Link>
                </li>
              </ul>
            {/* </div> */}
          </nav>
        </div>
    );
}

export default Header;
