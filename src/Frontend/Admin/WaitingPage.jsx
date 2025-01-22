import { Link } from 'react-router-dom'

const WaitingPage = () => {
  return (
    <>
    <h1>To Continue your sign up you have to verify the email we sent to you</h1>
    <p>Verified?  <Link to={'/login'}> Login</Link></p>
    </>
  )
}

export default WaitingPage