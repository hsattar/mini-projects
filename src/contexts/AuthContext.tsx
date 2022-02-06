import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, User, UserCredential, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { ReactNode, useContext, useEffect, useState } from "react"
import { createContext } from "react"
import { auth } from "../firebase"

type userCredentialPromise = (email: string, password: string) => Promise<UserCredential>
type userPromise = () => Promise<User>
type voidPromise = () => Promise<void>

interface IAuthContext {
    currentUser: User | null | undefined
    login: userCredentialPromise | null
    signup: userCredentialPromise | null
    logout: voidPromise | null
    googleLogin: userPromise | null
}

interface Props {
    children: ReactNode
}

const contextDefaultValues: IAuthContext = {
    currentUser: null,
    login: null,
    signup: null,
    logout: null,
    googleLogin: null
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

    const googleProvider = new GoogleAuthProvider()

    const googleLogin = async () => {
        const result = await signInWithPopup(auth, googleProvider)
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential?.accessToken
        const user = result.user
        return user
    }

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
        logout,
        googleLogin
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )

}
