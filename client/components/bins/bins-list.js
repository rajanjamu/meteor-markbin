import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';

class BinsList extends Component {
    onBinRemove(bin) {
        Meteor.call('bins.remove', bin);
    }

    renderList() {
        return this.props.bins.map(bin => {
            return (
                <li key={bin._id} className="list-group-item">
                    {bin._id}
                    <span className="pull-right">
                        <button 
                            className="btn btn-danger" 
                            onClick={() => this.onBinRemove(bin)}>
                            Remove
                        </button>
                    </span>
                </li>
            );
        })
    }

    render() {
        return (
            <ul className="list-group">
                {this.renderList()}
            </ul>
        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('bins');
    return { bins: Bins.find({}).fetch() };
})(BinsList);