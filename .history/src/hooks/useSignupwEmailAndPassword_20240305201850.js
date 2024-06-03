import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {a}
const useSignupwEmailAndPassword = () => {
    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth);
    return{

    }
}

export default useSignupwEmailAndPassword
