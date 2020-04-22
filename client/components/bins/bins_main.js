import React, { Component } from 'react';

class BinsMain extends Component {
    render() {
        var id = this.props.match.params.binId;
        return (
            <div>{id}</div>
        );
    }
} 

export default BinsMain;