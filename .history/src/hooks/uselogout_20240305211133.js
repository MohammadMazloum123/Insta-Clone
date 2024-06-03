import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Firebase";
import useShowToast from "./useShowToast";

const useLogout = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const showToast = useShowToast();
    const handleLogout = async () => {
        
    }
    return {handleLogout, loading, error}
}
export default useLogout;
