const cloudinary = require('cloudinary');
const cloudinaryStorage = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_key,
    api_secret: process.env.CLOUD_API_SECRET
});

/*
const storage =  new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'wanderlust_DEV',
      allowedFormats:["png","jpg","jpeg"]
     },
  });
  */

  const storage = cloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'wanderlust_DEV',
      allowedFormats: ['jpg', 'png','jpeg'],
    }
    });

  module.exports = {
    cloudinary,
    storage,
};