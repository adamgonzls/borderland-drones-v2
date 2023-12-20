import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

export default function Login() {
  const [form, setForm] = useState({
    email: '',
    password: '',
  })
  const { login, error, isLoading } = useLogin()

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

    await login(form.email, form.password)
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

          <button disabled={isLoading}>Login</button>
          {error && <div>{error}</div>}
        </form>
      </section>
    </main>
  )
}
