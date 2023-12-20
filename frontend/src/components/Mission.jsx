import { Link } from 'react-router-dom'

export default function Mission({ missionData }) {
  // console.log(missionData)
  const {
    _id,
    missionName,
    friendlyMissionName,
    contactFirstName = 'Not given',
    contactLastName = 'Not given',
    contactPhoneNumber,
    contactEmail,
    requestDetails,
  } = missionData
  return (
    <div>
      <h2>Mission {friendlyMissionName ? friendlyMissionName : _id}</h2>
      <h3 className='font-reg'>Contact First Name:</h3>
      <span>{contactFirstName}</span>
      <h3 className='font-reg'>Contact Last Name:</h3>
      <span>{contactLastName}</span>
      <h3 className='font-reg'>Contact Phone Number:</h3>
      <span>{contactPhoneNumber}</span>
      <h3 className='font-reg'>Contact Email:</h3>
      <span>{contactEmail}</span>
      <h3 className='font-reg'>Request Details:</h3>
      <p className='mt-0'>{requestDetails}</p>
      <Link to={`/missions/${_id}`}>Mission Details</Link>
    </div>
  )
}
