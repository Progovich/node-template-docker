const path = require('path');

exports.getMainPage = (req, res, next) => {
  res.sendFile(path.join(__dirname, '../views/main.html'));
};
