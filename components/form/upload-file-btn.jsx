import React, { useContext, useState, useEffect } from 'react';
import nanoid from 'nanoid';
import { ContactUsContext } from '../context/contacts-context';

const DEFAULT_FILENAME = 'Attach your file';
const DEFAULT_FILESIZE = 'up to 10MB';
const allowedExts = ['pdf', 'doc', 'docx', 'jpeg', 'jpg', 'png', 'xls', 'xlsx', 'ppt', 'pptx'];
const randomId = `upload-btn-${nanoid(8)}`;

const validateFile = (file) => {
  const ext = file.name.split('.')[file.name.split('.').length - 1];
  if (!allowedExts.includes(ext)) {
    return 'Not allowed file type';
  }
  if (file.size > 10000000) { // 10mb
    return 'File size too large, please send the link instead';
  }
  return null;
};

const FileUpload = () => {
  const [fileName, setFileName] = useState(DEFAULT_FILENAME);
  const [fileSize, setFileSize] = useState(DEFAULT_FILESIZE);

  const { setFile } = useContext(ContactUsContext);

  const unattachFile = (err) => {
    setFile(err);
    setFileName(DEFAULT_FILENAME);
    setFileSize(DEFAULT_FILESIZE);
  };

  useEffect(() => {
    unattachFile({ value: '', error: false });
  }, []);

  const handleFileChange = (evt) => {
    const fileObj = evt.target.files[0];
    if (fileObj) {
      const error = validateFile(fileObj);
      if (!error) {
        setFile(fileObj);
        setFileName(fileObj.name);
        setFileSize(` ${(Math.round(fileObj.size / 10000) / 100) || '0.01'} MB `);
      } else {
        unattachFile({
          value: null,
          error: true,
          status: error,
          errorField: 'file',
        });
      }
    } else {
      unattachFile({ value: '', error: false });
    }
  };

  return (
    <div className="file-upload-container">
      <label htmlFor={randomId} className="custom-file-upload">
        {(fileName.length > 10 && fileName !== DEFAULT_FILENAME)
          ? fileName.substring(0, 10).concat('...')
          : fileName}
        <span>
          (
          { fileSize }
          )
        </span>
        <img src="/static/images/svg/file.svg" alt="File" />
      </label>
      <input
        id={randomId}
        type="file"
        name="file"
        onChange={handleFileChange}
      />
      <div className="file-upload-desc">{ allowedExts.join(', ') }</div>
    </div>
  );
};

export default FileUpload;
