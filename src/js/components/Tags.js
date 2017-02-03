import React from 'react';

export default class Tags extends React.Component {
  componentDidMount() {
    let that = this;
    let chipData = [];
    if (this.props.tags.length > 0) {
      for (let i=0; i<this.props.tags.length; i++) {
        chipData.push({
          tag: this.props.tags[i]
        });
      }
    }
    $('.chips').material_chip({
      placeholder: '+Tag and hit Enter',
      secondaryPlaceholder: '+Tag and hit enter',
      data: chipData
    });
    $('.chips').on('chip.add', function(e, chip){
      that.props.onChange($('.chips').material_chip('data'));
    });
    $('.chips').on('chip.delete', function(e, chip){
      that.props.onChange($('.chips').material_chip('data'));
    });
  }
  renderTags() {
    let content = [];
    if (this.props.tags.length > 0) {
      for (let i=0; i<this.props.tags.length; i++) {
        content.push(
          <div className="chip" key={i}>
            {this.props.tags[i]}
          </div>
        );
      }
    }
    return content;
  }
  render() {
    return this.props.editable ? (
      <div className="tags">
        <div className="chips"></div>
      </div>
    ) : (
      <div className="tags right">
        {this.renderTags()}
      </div>
    );
  }
}