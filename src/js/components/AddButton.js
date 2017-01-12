import React from 'react';

export default class AddButton extends React.Component {
  render() {
    return(
      <div className="fixed-action-btn">
        <a className="btn-floating btn-large waves-effect waves-light pink click-to-toggle"><i className="material-icons">add</i></a>
      </div>
    );
  }
}