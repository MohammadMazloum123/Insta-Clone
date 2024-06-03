import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useShowToast from './useShowToast';
import { auth } from '../Firebase/Firebase';


const useLogin = () => {
    const showToast = useShowToast();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth); 
    const login = (inputs) => {
        if(!inputs.email || !inputs.password){
            return showToast("Error", "please fill all the fields", "error");
        }
        try {
            const userCard = await useSignInWithEmailAndPassword(inputs.email, inputs.password);
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    }

};

export default useLogin;
