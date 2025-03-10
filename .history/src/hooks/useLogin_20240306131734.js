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

}

export default useLogin;
