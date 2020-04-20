import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return(
    <div>
      <h1>This is a MarkBin project</h1>
    </div>
  );
}

Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.render-target'));
});