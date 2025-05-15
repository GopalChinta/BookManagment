"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/bookRoutes.ts
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const bookController_1 = require("../controllers/bookController");
const environment_1 = require("../config/environment");
const router = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination: environment_1.UPLOAD_DIR,
    filename: (_req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = (0, multer_1.default)({ storage });
router.post('/import', upload.single('file'), bookController_1.importBooks);
exports.default = router;
