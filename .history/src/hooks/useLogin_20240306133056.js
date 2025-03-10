import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import useShowToast from './useShowToast';
import { auth, fireStore } from '../Firebase/Firebase';
import useAuthStore from '../store/authStore';


const useLogin = () => {
    const showToast = useShowToast();
    const [
        signInWithEmailAndPassword,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const loginUser = useAuthStore(state => state.login);


    const login = async (inputs) => {
        if(!inputs.email || !inputs.password){
            return showToast("Error", "please fill all the fields", "error");
        }
        try {
            const userCred = await useSignInWithEmailAndPassword(inputs.email, inputs.password);
            if (userCred){
                const docRef = doc(fireStore, "users", userCred.user.uid);
                const docSnap = await getDoc(docRef);
                localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
                loginUser(docSnap.data())
            }
        } catch (error) {
            showToast("Error", error.message, "error");
        }
    }
    return{loading, error, login};
};

export default useLogin;
