import express from 'express'
import { PORT } from './config.js'
import 'dotenv/config'
import cors from 'cors'
import missionRoutes from './routes/mission.js'
import userRoutes from './routes/user.js'
const app = express()
import mongoose from 'mongoose'

app.use(cors())
// app.use(
//   cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: [],
//   })
// )

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// routes
app.use('/api/missions', missionRoutes)
app.use('/api/users', userRoutes)

// app.get('/missions', async (req, res) => {
//   try {
//     const missions = await Mission.find({})
//     return res.status(200).json(missions)
//   } catch (error) {
//     console.log(error.message)
//     res.status(500).send({ message: error.message })
//   }
// })

// app.get('/missions/:id', async (req, res) => {
//   try {
//     const mission = await Mission.findById(req.params.id)
//     console.log(mission)
//     return res.status(200).json(mission)
//   } catch (error) {
//     res.status(500).send({ message: error.message })
//   }
// })

// app.post('/missions', async (req, res) => {
//   try {
//     if (
//       !req.body.contactFirstName ||
//       // !req.body.lastName ||
//       !req.body.contactPhoneNumber ||
//       // !req.body.email ||
//       !req.body.requestDetails
//     ) {
//       return res.status(400).send({
//         message:
//           'Please send all required fields: First Name, Phone Number and Request Details',
//       })
//     }
//     const newMission = new Mission(req.body)
//     await newMission.save()
//     return res.status(201).send(newMission)
//   } catch (error) {
//     res.status(500).send({ message: error.message })
//   }
// })

// app.put('/missions/:id', async (req, res) => {
//   try {
//     if (
//       !req.body.contactFirstName ||
//       // !req.body.lastName ||
//       !req.body.contactPhoneNumber ||
//       // !req.body.email ||
//       !req.body.requestDetails
//     ) {
//       return res.status(400).send({
//         message:
//           'Please send all required fields: First Name, Phone Number and Request Details',
//       })
//     }
//     const { id } = req.params
//     const mission = await Mission.findByIdAndUpdate(id, req.body)
//     if (!mission) {
//       return res.status(404).json({ message: 'Mission not found' })
//     }
//     return res.status(200).send({ message: 'Mission updated successfully' })
//   } catch (error) {
//     return res.status(500).send({ message: error.message })
//   }
// })

mongoose
  .connect(process.env.mongoDBURL)
  .then(() => {
    console.log('DB is connected')
    app.listen(PORT, () => {
      console.log(`App is listening on http://localhost:${PORT}`)
    })
  })
  .catch((error) => {
    console.log(`Mongo Error: ${error}`)
  })
