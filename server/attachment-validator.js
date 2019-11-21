module.exports = files => {
  if (files === null) return {};
  const file = files.file;
  const allowedExts = ['pdf', 'doc', 'docx', 'jpeg', 'jpg', 'png', 'xls', 'xlsx', 'ppt', 'pptx'];
  const ext = file.name.split('.')[file.name.split('.').length - 1]
  if (!allowedExts.includes(ext)) throw new Error('Not allowed file type');
  if (file.size > 10000000) throw new Error('File size too large, is must be not bigger than 10MB'); // 10000000 = 10mb
  const attachment = {
    name: file.name,
    content: file.data,
    encoding: file.encoding,
    contentType: file.mimetype
  }
  return attachment;
}