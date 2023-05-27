const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const tmpDir = path.resolve("./tmp");

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  folder: "superheroes",
  allowedFormats: ['jpg', 'jpeg', 'png'],
  transformation: [
    { height: 338, width: 360, gravity: "face", crop: "fill" },
  ],
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadCloud = multer({ storage });

module.exports = uploadCloud;