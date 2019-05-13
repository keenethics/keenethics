const prod = process.env.NODE_ENV === 'production';

module.exports = {
  BACKEND_URL: prod ? 'https://keenethics.com' : 'http://localhost:3000',
};
