import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function Index() {

  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await logout()
      console.log('signed out')
      navigate('/login')
    } catch (error) {
      console.log('failed to sign out',error)
    }
  }

  return (
    <Container>
      <h2>Index</h2>
      <h2>{currentUser.email}</h2>
      <Button variant="danger" onClick={handleLogout}>Logout</Button>
    </Container>
  )
}
