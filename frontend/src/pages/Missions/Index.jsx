import { useEffect, useState } from 'react'
import Mission from '../../components/Mission'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function MissionsIndex() {
  const [allMissions, setAllMissions] = useState([])
  const { user } = useAuthContext()

  useEffect(() => {
    const fetchMissions = async () => {
      const reqOptions = {
        headers: { Authorization: `Bearer ${user.token}` },
      }
      const res = await fetch('http://localhost:5555/api/missions', reqOptions)
      const json = await res.json()
      if (res.ok) {
        setAllMissions(json)
      }
    }
    if (user) {
      fetchMissions()
    }
  }, [user])

  const missionElements = allMissions.map((mission) => (
    <Mission key={mission._id} missionData={mission} />
  ))

  return (
    <main>
      <section className='base-padding'>
        <Link to='/missions/new'>Add New Mission</Link>
        <h1>All Missions</h1>
        {missionElements.length ? (
          missionElements
        ) : (
          <p>There are no missions</p>
        )}
      </section>
    </main>
  )
}
