import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function MissionDetails() {
  const [mission, setMission] = useState()
  const [loading, setLoading] = useState(true)
  const [editMode, setEditMode] = useState(false)
  const { id } = useParams()
  const { user } = useAuthContext()

  useEffect(() => {
    const missionData = async () => {
      const reqOptions = {
        headers: { Authorization: `Bearer ${user.token}` },
      }
      const res = await fetch(
        `http://localhost:5555/missions/${id}`,
        reqOptions
      )
      const json = await res.json()
      if (res.ok) {
        setMission(json)
        setLoading(false)
      }
    }

    if (user) {
      missionData().catch((error) => {
        console.log(error)
        setLoading(false)
      })
    }
  }, [user])

  return (
    <>
      {loading ? (
        <span>loading</span>
      ) : (
        <main>
          <section className='base-padding'>
            <h1 className='font-md'>
              Mission:{' '}
              {mission.friendlyMissionName
                ? mission.friendlyMissionName
                : mission._id}
            </h1>

            <div>
              <h3 className='font-reg'>Mission Name:</h3>
              {mission.friendlyMissionName}
              <h3 className='font-reg'>Contact First Name:</h3>
              {mission.contactFirstName}
              <h3 className='font-reg'>Contact Last Name:</h3>
              {mission.contactLastName}
              <h3 className='font-reg'>Contact Phone Number:</h3>
              {mission.contactPhoneNumber}
              <h3 className='font-reg'>Contact Email:</h3>
              {mission.contactEmail}
              <h3 className='font-reg'>Request Details:</h3>
              <p className='mt-0'>{mission.requestDetails}</p>
            </div>
            <Link to={`/missions/${mission._id}/edit`}>Edit Mission</Link>
          </section>
        </main>
      )}
    </>
  )
}
