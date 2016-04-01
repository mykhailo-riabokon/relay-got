const path = require('path');

const sourcePath = path.resolve(__dirname, 'src');
const distAssetsPath = path.join(__dirname, 'build');

module.exports.__PRODUCTION__ = (process.env.NODE_ENV === 'production');
module.exports.clientOutputPath = path.join(distAssetsPath, 'assets', 'js');
module.exports.__DEVELOPMENT__ = (process.env.NODE_ENV === 'development');
module.exports.clientSourcePath = path.join(sourcePath, 'client');
module.exports.srcAssetsPath = path.join(sourcePath, 'assets');
module.exports.__HOT__ = Boolean(process.env.HOT);
module.exports.distAssetsPath = distAssetsPath;
module.exports.port = process.env.PORT || 3000;
module.exports.sourcePath = sourcePath;
