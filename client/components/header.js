import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">CodeBin</a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><a href="#">Sign Up</a></li>
                <li><a href="#">Create Bin</a></li>
              </ul>
            </div>
          </nav>
        );
    }
    
}

export default Header;