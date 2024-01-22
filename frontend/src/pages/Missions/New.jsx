import ContactForm from '../../components/ContactForm'

// after submitting the mission, redirect to the newly created mission

export default function NewMission() {
  return (
    <main>
      <section className='base-padding'>
        <h1>New Mission</h1>
        <ContactForm />
      </section>
    </main>
  )
}
