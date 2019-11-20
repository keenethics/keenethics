module.exports = files => {
  if (files === null) return {};
  const file = files.file;
  const attachment = {
    name: file.name,
    content: file.data,
    encoding: file.encoding,
    contentType: file.mimetype
  }
  const allowedExts = ['pdf', 'doc', 'docx', 'jpeg', 'png', 'xls', 'xlsx', 'ppt', 'pptx'];
  const ext = attachment.name.split('.')[attachment.name.split('.').length - 1]
  if (!allowedExts.includes(ext)) throw new Error('Not allowed file type');
  return attachment;
}