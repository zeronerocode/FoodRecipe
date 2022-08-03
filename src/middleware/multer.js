const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "hirejob",
  },
});
const maxSize = 200 * 1024 * 1024 ;
const upload = multer({
  storage: storage,
  limits: { fileSize: maxSize  },
  fileFilter: (req, file, cb) => {
    if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg" || file.mimetype === "video/mp4") {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only video with .mp4, photo with .png, .jpg, and .jpeg extension allowed!"));
    }
  },
});

module.exports = upload;
