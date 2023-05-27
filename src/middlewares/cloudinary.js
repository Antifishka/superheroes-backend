const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const uploadHeroImage = async (pathFile) => {
  const options = {
    folder: "superheroes",
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    transformation: [
      { height: 360, width: 338, gravity: "face", crop: "fill" },
    ],
  };
  try {
    const result = await cloudinary.uploader.upload(pathFile, options);
    console.log(result.url, "result.url");
    return result.url;
  } catch (error) {
    console.error(error);
  }
};

module.exports = { uploadHeroImage };