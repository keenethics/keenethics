import React, { Component } from 'react';
import nanoid from 'nanoid';
import PropTypes from 'prop-types';
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
      onChange,
    } = this.props;
    return (
      <div className="file-upload-container">
        <label htmlFor={this.id} className="custom-file-upload">
          { text }
          <span>
(
            { limit }
)
          </span>
          <img src="/static/images/svg/file.svg" alt="File" />
        </label>
        <input id={this.id} type="file" name="file" onChange={onChange} />
        <span className="file-upload-desc">{ allowedExts }</span>
      </div>
    );
  }
}

FileUpload.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string,
  limit: PropTypes.string,
  allowedExts: PropTypes.string,
  onChange: PropTypes.func,
};
FileUpload.defaultProps = {
  id: null,
  text: '',
  limit: '',
  allowedExts: '',
  onChange: null,
};
