import React from 'react';

export default class Photo extends React.Component {
  componentDidMount() {
    let that = this;
    $('body').on('change', '.upload-file', function() {
      if (this.files.length > 0) {
        that.handleFileUpload(this.files[0]);
      }
    });
  }
  
  handleFileUpload(file) {
    let imgTag = $('#displayed-image'),
        that = this,
        fr = new FileReader();
    fr.onload = function() {
      imgTag.css('visibility', 'hidden');
      imgTag.parent().attr('style', 'background-image: url(' + this.result + ')');
      that.props.onChange(this.result);
    };
    fr.readAsDataURL(file);
  }
  
  renderEditableImage() {
    return this.props.source ?
      (
        <div className="img" style={{backgroundImage: 'url(' + this.props.source + ')'}}>
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
        <div style={{backgroundImage: 'url(' + this.props.source + ')'}} alt={this.props.alt} className={"img " + this.props.className}></div>
      );
  }
}