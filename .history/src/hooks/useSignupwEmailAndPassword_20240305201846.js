import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth
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
