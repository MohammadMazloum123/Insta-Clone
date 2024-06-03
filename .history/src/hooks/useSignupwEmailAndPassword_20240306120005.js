import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, fireStore } from '../Firebase/Firebase';
import { Firestore, doc, setDoc } from "firebase/firestore"; 
import { useToast } from '@chakra-ui/react';
import useAuthStore from '../store/authStore';
const useSignupwEmailAndPassword = () => {
    const [
    createUserWithEmailAndPassword,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const showToast = useToast();
    const loginUser = useAuthStore();
    const logo
    const signup = async (inputs) => {
        if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullname){
            showToast("Error", "Please Fill all the fields", "error")
            return;
        }
        try{
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if(!newUser && error){
                showToast("Error", error.message, "error")
                return
            }
            if(newUser){
                const userDoc = {
                    uid:newUser.user.uid,
                    email:inputs.email,
                    username:inputs.username,
                    fullname:inputs.fullname,
                    bio:"",
                    followers:[],
                    following:[],
                    posts:[],
                    profilePicUrl:"",
                    createdAt:Date.now(),
                };
                await setDoc(doc(fireStore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user-info", JSON.stringify(userDoc));
            }
        }
        catch(error){
            showToast("Error", error.message, "error")
        }
    }
    return{loading, error, signup}
}

export default useSignupwEmailAndPassword;
