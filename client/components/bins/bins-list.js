import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Bins } from '../../../imports/collections/bins';

class BinsList extends Component {

    renderBins() {
        return this.props.bins.map(bin => {
            return (
                <li key={bin._id}>
                    {bin._id}
                </li>
            );
        })
    }

    render() {
        console.log(this.props.bins);
        return (
            <div>
                Bins List
                <ul>
                    {this.renderBins()}
                </ul>
            </div>

        );
    }
}

export default withTracker(() => {
    Meteor.subscribe('bins');
    return { bins: Bins.find({}).fetch() };
})(BinsList);