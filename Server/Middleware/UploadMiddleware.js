const multer = require("multer");

const { checkFileType } = require("../../shared/checkFileType");

const storageEngine = multer.diskStorage({
  destination: "./images",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}.${file.originalname.split(".")[1]}`);
  },
});

const upload = multer({
  storage: storageEngine,
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});

module.exports = upload;
