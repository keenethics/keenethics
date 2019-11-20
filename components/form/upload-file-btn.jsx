import React, { Component, Fragment } from 'react';
import nanoid from 'nanoid';
import '../../styles/form/upload-btn.scss';

export default class FileUpload extends Component { 
  constructor(props) {
    super(props);

    this.id = props.id || `upload-btn-${nanoid(8)}`;
  }

  render() {
    const {
      text,
      limit,
      allowedExts,
      onChange
    } = this.props;
    return(
      <div className="file-upload-container">
        <label htmlFor={this.id} class="custom-file-upload">
          { text } <span>({ limit })</span> <img src="/static/images/svg/file.svg" alt="File" />
        </label>
        <input id={this.id} type="file" name="file" onChange={ onChange }/>
        <span className="file-upload-desc">{ allowedExts }</span>
      </div>
    );
  }
}