import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import uploadRouter from './routes/upload.js'

const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

// GET all ideas
app.get('/ideas', async (req, res) => {
  try {
    const ideas = await prisma.idea.findMany({
      orderBy: {
        created_on: 'desc'
      }
    })
    res.json(ideas)
  } catch (err) {
    console.error("❌ Error in GET /ideas:", err)
    res.status(500).json({ error: "Internal Server Error" })
  }
})

// POST new idea
app.post('/ideas', async (req, res) => {
  try {
    console.log("📥 Incoming data:", req.body)

    const idea = await prisma.idea.create({
      data: req.body,
    })

    res.json(idea)
  } catch (err) {
    console.error("❌ Server error on POST /ideas:", err)
    res.status(500).json({ error: "Internal Server Error" })
  }
})


// PATCH update idea
app.patch('/ideas/:id', async (req, res) => {
  const { id } = req.params

  const updated = await prisma.idea.update({
    where: { id },
    data: req.body  
    
  })

  res.json(updated)
})


// DELETE idea
app.delete('/ideas/:id', async (req, res) => {
  const { id } = req.params
  await prisma.idea.delete({ where: { id } })
  res.json({ message: 'Deleted' })
})

// Serve uploaded audio & mount upload route
app.use('/audio', express.static('public/audio'))
app.use(uploadRouter)

// Start server
app.listen(3000, () => {
  console.log('🔥 Server running at http://localhost:3000')
})

