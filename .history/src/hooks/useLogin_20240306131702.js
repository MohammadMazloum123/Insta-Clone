import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useShowToast from './useShowToast';

const useLogin = () => {
    const showToast = useShowToast();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth); 
  return (
    <div>
      
    </div>
  )
}

export default useLogin;
