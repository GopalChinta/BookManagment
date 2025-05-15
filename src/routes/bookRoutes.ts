// src/routes/bookRoutes.ts
import express from 'express';
import multer from 'multer';
import { importBooks } from '../controllers/bookController';
import { UPLOAD_DIR } from '../config/environment';

const router = express.Router();

const storage = multer.diskStorage({
  destination: UPLOAD_DIR,
  filename: (_req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage });

router.post('/import', upload.single('file'), importBooks);

export default router;






