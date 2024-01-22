import { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../hooks/useAuthContext'

export default function EditMission() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true)
  const [form, setForm] = useState({
    contactFirstName: '',
    contactLastName: '',
    contactPhoneNumber: '',
    contactEmail: '',
    requestDetails: '',
  })
  const { user } = useAuthContext()

  const { id } = useParams()

  useEffect(() => {
    const fetchMission = async () => {
      const reqOptions = {
        headers: { Authorization: `Bearer ${user.token}` },
      }
      const res = await fetch(
        `http://localhost:5555/api/missions/${id}`,
        reqOptions
      )
      const json = await res.json()
      setForm(json)
      setLoading(false)
    }

    if (user) {
      fetchMission().catch((error) => {
        console.log(error)
        setLoading(false)
      })
    }
  }, [user])

  function handleChange(event) {
    const { name, value, type, checked } = event.target
    setForm((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (!user) {
      setError('You must be logged in')
      return
    }

    const updateData = async () => {
      const reqOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(form),
      }
      const response = await fetch(
        `http://localhost:5555/api/missions/${id}`,
        reqOptions
      )
      const data = await response.json()
      console.log(data)
      navigate(`/missions/${id}`)
    }
    updateData()
  }

  return (
    <>
      {loading ? (
        <span>loading</span>
      ) : (
        <main>
          <section className='base-padding'>
            <h1 className='font-md'>
              Edit Mission:{' '}
              {form.friendlyMissionName ? form.friendlyMissionName : form._id}
            </h1>

            <form className='base-form' onSubmit={handleSubmit}>
              <div className='base-form__row'>
                <label
                  className='base-form__label--bold'
                  htmlFor='friendlyMissionName'
                >
                  Mission Name:
                </label>
                <input
                  id='friendlyMissionName'
                  className='base-form__input'
                  type='text'
                  name='friendlyMissionName'
                  value={
                    form.friendlyMissionName
                      ? form.friendlyMissionName
                      : form._id
                  }
                  placeholder='Mission Name'
                  onChange={handleChange}
                />
              </div>
              <div className='base-form__row'>
                <label
                  className='base-form__label--bold'
                  htmlFor='contactFirstName'
                >
                  Contact First Name:
                </label>
                <input
                  id='contactFirstName'
                  className='base-form__input'
                  type='text'
                  name='contactFirstName'
                  value={form.contactFirstName}
                  placeholder='First Name'
                  onChange={handleChange}
                />
              </div>
              <div className='base-form__row'>
                <label
                  className='base-form__label--bold'
                  htmlFor='contactLastName'
                >
                  Last Name:
                </label>
                <input
                  id='contactLastName'
                  className='base-form__input'
                  type='text'
                  name='contactLastName'
                  value={form.contactLastName}
                  placeholder='Last Name'
                  onChange={handleChange}
                />
              </div>
              <div className='base-form__row'>
                <label
                  className='base-form__label--bold'
                  htmlFor='contactPhoneNumber'
                >
                  Phone Number:
                </label>
                <input
                  id='contactPhoneNumber'
                  className='base-form__input'
                  type='tel'
                  name='contactPhoneNumber'
                  value={form.contactPhoneNumber}
                  placeholder='915-555-5555'
                  onChange={handleChange}
                />
              </div>
              <div className='base-form__row'>
                <label
                  className='base-form__label--bold'
                  htmlFor='contactEmail'
                >
                  Email:
                </label>
                <input
                  id='contactEmail'
                  className='base-form__input'
                  type='text'
                  name='contactEmail'
                  value={form.contactEmail}
                  placeholder='name@domain.com'
                  onChange={handleChange}
                />
              </div>
              <div className='base-form__row'>
                <label
                  className='base-form__label--bold'
                  htmlFor='requestDetails'
                >
                  Request Details:
                </label>
                <textarea
                  id='requestDetails'
                  className='base-form__input base-form__textarea--no-resize'
                  name='requestDetails'
                  value={form.requestDetails}
                  placeholder='Roof inspection'
                  onChange={handleChange}
                />
              </div>
              <button onClick={handleSubmit}>Save Changes</button>
            </form>
            <Link to={`/missions/${form._id}`}>View Mission</Link>
          </section>
        </main>
      )}
    </>
  )
}
