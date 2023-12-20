import express from 'express'
// import { loginUser, signupUser } from '../controllers/userController.js'
import { Mission } from '../models/missionModel.js'
const router = express.Router()
import { requireAuth } from '../middleware/requireAuth.js'

// require auth for all mission routes
// router.use(requireAuth)

// all missions
router.get('/', requireAuth, async (req, res) => {
  try {
    const missions = await Mission.find({})
    return res.status(200).json(missions)
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ message: error.message })
  }
})

// mission by id
router.get('/:id', requireAuth, async (req, res) => {
  try {
    const mission = await Mission.findById(req.params.id)
    console.log(mission)
    return res.status(200).json(mission)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

// add mission
router.post('/', async (req, res) => {
  try {
    if (
      !req.body.contactFirstName ||
      // !req.body.lastName ||
      !req.body.contactPhoneNumber ||
      // !req.body.email ||
      !req.body.requestDetails
    ) {
      return res.status(400).send({
        message:
          'Please send all required fields: First Name, Phone Number and Request Details',
      })
    }
    const newMission = new Mission(req.body)
    await newMission.save()
    return res.status(201).send(newMission)
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
})

// update mission
router.put('/:id', requireAuth, async (req, res) => {
  try {
    if (
      !req.body.contactFirstName ||
      // !req.body.lastName ||
      !req.body.contactPhoneNumber ||
      // !req.body.email ||
      !req.body.requestDetails
    ) {
      return res.status(400).send({
        message:
          'Please send all required fields: First Name, Phone Number and Request Details',
      })
    }
    const { id } = req.params
    const mission = await Mission.findByIdAndUpdate(id, req.body)
    if (!mission) {
      return res.status(404).json({ message: 'Mission not found' })
    }
    return res.status(200).send({ message: 'Mission updated successfully' })
  } catch (error) {
    return res.status(500).send({ message: error.message })
  }
})

export default router
