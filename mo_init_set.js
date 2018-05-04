module.exports = {
  requestUrl: 'https://yourRequestUrl/RootDirectory/EndWithoutForwardSlash',
  aes_key: 'yourAESkey',
  aes_iv: 'yourAESiv',
  basic_theme_color: ["#e6f7ff", "#bae7ff", "#91d5ff", "#69c0ff", "#40a9ff", "#1890ff", "#096dd9", "#0050b3", "#003a8c", "#002766"],  //Ten layers of HEX colors. Refer to Ant.desgin. 
  CryptoJS: require('aes.js'), //If you won't use AES, set it as ''.
  OSS: {
    'BucketName': {
      'url': 'BucketUrl',
      'id': 'BucketId',
      'policy': 'BucketPolicy',
      'signature': 'BucketSignature'
    }
  }
};