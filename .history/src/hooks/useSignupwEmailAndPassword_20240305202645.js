import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase/Firebase';
const useSignupwEmailAndPassword = () => {
    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const signup = (inputs) => {

    }
    return{

    }
}

export default useSignupwEmailAndPassword;
