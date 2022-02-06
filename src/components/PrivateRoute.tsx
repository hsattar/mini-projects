import { ReactNode } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

interface Props {
    children: ReactNode
}

export default function PrivateRoute({ children }: Props): any {
    
    const { currentUser } = useAuth()

    return currentUser ? children : <Navigate to="/login" />
}