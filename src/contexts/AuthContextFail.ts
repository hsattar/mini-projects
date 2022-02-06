import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User, UserCredential } from "firebase/auth"
import { FC, ReactNode, useContext, useEffect, useState } from "react"
import { createContext } from "react"
import { auth } from "../firebase"

type userCredentialPromise = (email: string, password: string) => Promise<UserCredential>
type voidPromise = () => Promise<void>

interface IAuthContext {
    currentUser: User | null | undefined
    login: userCredentialPromise | null
    signup: userCredentialPromise | null
    logout: voidPromise | null
}

interface Props {
    children: ReactNode
}

const contextDefaultValues: IAuthContext = {
    currentUser: null,
    login: null,
    signup: null,
    logout: null
}

const AuthContext = createContext<IAuthContext>(contextDefaultValues)

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: Props) => {

    const [currentUser, setCurrentUser] = useState<User | null>()
    const [loading, setLoading] = useState(true)

    const signup = (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => signOut(auth)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            setCurrentUser(user)
            setLoading(false)
        })

        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout
    }

    // return (
    //     <h1></h1>
    // )

}
