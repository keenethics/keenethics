module.exports = (files) => {
  const error = {
    errorField: 'file',
    status: '',
  };
  if (files === null) return {};
  const file = files.file;
  const allowedExts = ['pdf', 'doc', 'docx', 'jpeg', 'jpg', 'png', 'xls', 'xlsx', 'ppt', 'pptx'];
  const ext = file.name.split('.')[file.name.split('.').length - 1];
  if (!allowedExts.includes(ext)) {
    error.status = 'Not allowed file type';
    throw error;
  }
  if (file.size > 10000000) { // 10000000 = 10mb
    error.status = 'File size too large, please send the link instead';
    throw error;
  }
  const attachment = {
    name: file.name,
    content: file.data,
    encoding: file.encoding,
    contentType: file.mimetype,
  };
  return attachment;
};
