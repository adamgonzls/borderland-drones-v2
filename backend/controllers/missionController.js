import { Mission } from '../models/missionModel.js'
import { requireAuth } from '../middleware/requireAuth.js'

// all missions
export const getMissions = async (req, res) => {
  try {
    const missions = await Mission.find({})
    return res.status(200).json(missions)
  } catch (error) {
    console.log(error.message)
    res.status(500).send({ message: error.message })
  }
}

// need to add other routes here
