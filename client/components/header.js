import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, withRouter } from 'react-router-dom';

class Header extends Component {

    onBinClick(event) {
      event.preventDefault();

      Meteor.call('bins.insert', (error, binId) => {
        if(error) return console.log(error);          

        this.props.history.push(`/bins/${binId}`);
      });

    }

    render() {
        
        return (
            <nav className="navbar navbar-inverse">
            <div className="container">
              <div className="navbar-header">
                <Link to="/" className="navbar-brand">CodeBin</Link>
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

export default withRouter(Header);