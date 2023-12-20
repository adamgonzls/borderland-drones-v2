import { useState } from 'react'
import { useSignUp } from '../hooks/useSignup'

export default function SignUp() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const { signUp, error, isLoading } = useSignUp()

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(form)
    await signUp(form.email, form.password)
  }

  return (
    <main>
      <section className='base-padding'>
        <form className='base-form' onSubmit={handleSubmit}>
          <div className='base-form__row'>
            <label className='base-form__label--bold' htmlFor='email'>
              Email:
            </label>
            <input
              id='email'
              className='base-form__input'
              type='email'
              name='email'
              value={form.email}
              placeholder='name@domain.com'
              onChange={handleChange}
            />
          </div>
          <div className='base-form__row'>
            <label className='base-form__label--bold' htmlFor='password'>
              Password:
            </label>
            <input
              id='password'
              className='base-form__input'
              type='password'
              name='password'
              value={form.password}
              placeholder='Password'
              onChange={handleChange}
            />
          </div>

          <button disabled={isLoading}>Sign up</button>
          {error && <div>{error}</div>}
        </form>
      </section>
    </main>
  )
}
