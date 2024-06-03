import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useShowToast from './useShowToast';
import { auth, fireStore } from '../Firebase/Firebase';


const useLogin = () => {
    const showToast = useShowToast();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const loginUser = 
    const login = (inputs) => {
        if(!inputs.email || !inputs.password){
            return showToast("Error", "please fill all the fields", "error");
        }
        try {
            const userCred = await useSignInWithEmailAndPassword(inputs.email, inputs.password);
            if (userCred){
                const docRef = doc(fireStore, "users", userCred.user.uid);
                const docSnap = await getDoc(docRef);
                localStorage.setItem("user-info", JSON.stringify(docSnap.data()))
            }
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    }

};

export default useLogin;
