import React from 'react';

export default class Image extends React.Component {
  renderEditableImage() {
    return this.props.source ?
      (
        <div>
          <img src={this.props.source} />
          <a href="#" className="upload"><img src="icons/upload-icon.png" alt="upload a photo" /></a>
        </div>
      ) :
      (
        <a href="#" className="empty-upload">
          <img src="icons/empty-image.png" alt={this.props.alt} className={this.props.className} />
        </a>
      );
  }
  
  render() {
    return this.props.editable ?
      this.renderEditableImage() :
      (
        <img src={this.props.source} alt={this.props.alt} className={this.props.className} />
      );
  }
}