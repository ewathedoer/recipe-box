import React from 'react';

export default class Image extends React.Component {
  componentDidMount() {
    let imgTag = $('#displayed-image'),
        that = this;
    $('.upload-file').on('change', function() {
      let fr = new FileReader();
      fr.onload = function() {
        imgTag.attr('src', this.result);
        that.props.onChange(this.result);
      };
      if (this.files.length > 0) {
        fr.readAsDataURL(this.files[0]);
      }
    });
  }
  
  renderEditableImage() {
    return this.props.source ?
      (
        <div>
          <img src={this.props.source} />
          <div className="upload">
            <img src="icons/upload-icon.png" alt="upload a photo" />
            <input type="file" name="upload-file" className="upload-file" />
          </div>
        </div>
      ) :
      (
        <div className="empty-upload">
          <img src="icons/empty-image.png" alt={this.props.alt} id="displayed-image" className={this.props.className} />
          <input type="file" name="upload-file" className="upload-file" />
        </div>
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