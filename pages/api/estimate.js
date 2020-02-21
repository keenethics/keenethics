export default (req, res) => {
  if (req.method !== 'POST') {
    res.sendStatus(405);
  }
};
