import { useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    contactFirstName: '',
    contactLastName: '',
    contactPhoneNumber: '',
    contactEmail: '',
    requestDetails: '',
  })

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      }
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)

    const updateData = async () => {
      const reqOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      }
      const response = await fetch(
        `http://localhost:5555/missions/`,
        reqOptions
      )
      const data = await response.json()
      console.log(data)
    }
    updateData()
  }

  return (
    <form className='base-form' onSubmit={handleSubmit}>
      <div className='base-form__row'>
        <label className='base-form__label--bold' htmlFor='contactFirstName'>
          First Name:
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
        <label className='base-form__label--bold' htmlFor='contactLastName'>
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
        <label className='base-form__label--bold' htmlFor='contactPhoneNumber'>
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
        <label className='base-form__label--bold' htmlFor='contactEmail'>
          Email:
        </label>
        <input
          id='contactEmail'
          className='base-form__input'
          type='email'
          name='contactEmail'
          value={form.contactEmail}
          placeholder='name@domain.com'
          onChange={handleChange}
        />
      </div>
      <div className='base-form__row'>
        <label className='base-form__label--bold' htmlFor='requestDetails'>
          Request Details:
        </label>
        <textarea
          id='requestDetails'
          className='base-form__input'
          name='requestDetails'
          value={form.requestDetails}
          placeholder='Roof inspection'
          onChange={handleChange}
        />
      </div>
      <button>Submit</button>
    </form>
  )
}

// location_address_1: String,
// location_address_2: String,
// location_city: String,
// location_state: String,
// location_zip: String,
// request_summary: String,
// request_details: String,
// status: String,
