import React, { Component } from 'react';
import Accounts from './accounts';

class Header extends Component {

    onBinClick(event) {
      event.preventDefault();

      Meteor.call('bins.insert');
    }

    render() {
        return (
            <nav className="navbar navbar-inverse">
            <div className="container">
              <div className="navbar-header">
                <a className="navbar-brand" href="#">CodeBin</a>
              </div>
              <ul className="nav navbar-nav">
                <li className="active"><Accounts /></li>
                <li><a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a></li>
              </ul>
            </div>
          </nav>
        );
    }
    
}

export default Header;