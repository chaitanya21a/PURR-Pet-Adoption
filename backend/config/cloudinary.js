const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'PURR-Pet-Adoption',
    format: async (req, file) => 'jpg', // supports promises as well
    public_id: (req, file) => Date.now() + '-' + Math.round(Math.random() * 1E9),
  },
});

module.exports = {
    cloudinary,
    storage
};
