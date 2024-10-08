import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./media");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname)
  },
});

export default Upload = multer({ storage });
