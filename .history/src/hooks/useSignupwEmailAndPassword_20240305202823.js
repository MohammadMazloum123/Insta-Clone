import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase/Firebase';
const useSignupwEmailAndPassword = () => {
    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const signup = async (inputs) => {
        if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullname){
            console.log("")
            return
        }
    }
    return{

    }
}

export default useSignupwEmailAndPassword;
