

import express from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'

const router = express.Router()

// Create the uploads/audio directory if it doesn't exist
const audioDir = path.join('public', 'audio')
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true })
}

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, audioDir)
  },
  filename: function (req, file, cb) {
    const { ideaId } = req.body
    const ext = path.extname(file.originalname)
    const safeName = `idea-${ideaId}${ext}`
    cb(null, safeName)
  }
})

const upload = multer({ storage })

// POST /upload-audio
router.post('/upload-audio', upload.single('audio'), (req, res) => {
  const { ideaId } = req.body
  if (!req.file || !ideaId) {
    return res.status(400).json({ error: 'Missing file or ideaId' })
  }

  const audioPath = `/audio/${req.file.filename}`
  res.json({ audioPath })
})

export default router
