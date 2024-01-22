import mongoose from 'mongoose'

const missionSchema = mongoose.Schema(
  {
    friendlyMissionName: {
      type: String,
    },
    // missionName: {
    //   type: String,
    // },
    contactFirstName: {
      type: String,
      required: true,
    },
    contactLastName: {
      type: String,
    },
    contactPhoneNumber: {
      type: String,
      required: true,
    },
    contactEmail: {
      type: String,
    },
    requestDetails: {
      type: String,
      required: true,
    },
    userID: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
)

export const Mission = mongoose.model('Mission', missionSchema)
