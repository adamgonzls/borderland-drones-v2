import './Home.css'
import drone from '../assets/drone.jpeg'
import flyingDrone from '../assets/flying_drone.jpeg'
import droneTrees from '../assets/drone_trees.jpeg'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <main>
      <section className='base-padding'>
        <h1>Borderland Drones</h1>
        <p>
          Borderland Drones is your solution for licensed and reliable drone
          services.
        </p>
      </section>
      <section className='services'>
        <div className='base-padding-l'>
          <h2 className='font-lg'>Drone Services</h2>
          <ul className='font-md'>
            <li>Safely inspect roofs and other tall structures</li>
            <li>Get a bird's eye view of real estate properties</li>
            <li>Easily navigate rough terrain</li>
            <li>Audit construction project progress</li>
            <li>Observe crop growth from the sky</li>
          </ul>
        </div>
        <img src={drone} alt='' />
      </section>
      <section className='base-padding'>
        <h2>Let's Fly Together!</h2>
        <p>
          We have a simple process based on action, let's talk to get started.
        </p>
        <div className='project'>
          <div className='project__tile'>
            <img className='project__image' src={drone} alt='' />
            <h3>Tell us about your project</h3>
          </div>
          <div className='project__tile'>
            <img className='project__image' src={drone} alt='' />
            <h3>We schedule a flight</h3>
          </div>
          <div className='project__tile'>
            <img className='project__image' src={drone} alt='' />
            <h3>We fly!</h3>
          </div>
        </div>
      </section>
      {/* <section className='media-row'>
        <div className='media-row__item'>
          <img className='media-row__image' src={drone} alt='' />
        </div>
        <div className='media-row__item'>
          <img className='media-row__image' src={flyingDrone} alt='' />
        </div>
        <div className='media-row__item'>
          <img className='media-row__image' src={droneTrees} alt='' />
        </div>
        <div className='media-row__item'>
          <img className='media-row__image' src={drone} alt='' />
        </div>
      </section> */}
      <section className='base-padding'>
        <h2>Contact Us</h2>
        <ContactForm />
      </section>
    </main>
  )
}
