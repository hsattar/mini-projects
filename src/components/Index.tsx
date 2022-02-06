import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Index() {

  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout!()
      navigate('/login')
    } catch (error) {
      console.log('failed to sign out',error)
    }
  }

  return (
    <Container className='mt-5'>
      {JSON.stringify(currentUser)}
      <br /><br />
      <Button variant="danger" onClick={handleLogout}>Logout</Button>
    </Container>
  )
}