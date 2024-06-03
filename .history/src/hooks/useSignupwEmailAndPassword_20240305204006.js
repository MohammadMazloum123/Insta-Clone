import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../Firebase/Firebase';
import { Firestore, doc, setDoc } from "firebase/firestore"; 
const useSignupwEmailAndPassword = () => {
    const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const signup = async (inputs) => {
        if (!inputs.email || !inputs.password || !inputs.username || !inputs.fullname){
            console.log("Please Fill all the fields")
            return
        }
        try{
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password);
            if(!newUser && error){
                console.log(error);
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
                }
            }await setDoc(doc(Firestore, "cities", "new-city-id"), data);
        }
        catch(error){
            console.log(error);
        }
    }
    return{

    }
}

export default useSignupwEmailAndPassword;
