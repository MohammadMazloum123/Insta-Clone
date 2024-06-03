import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Firebase";
import useShowToast from "./useShowToast";

const useLogout = () => {
    const [signOut, isLogging, error] = useSignOut(auth);
    const showToast = useShowToast();
    const handleLogout = async () => {
        try {
            await signOut();
            localStorage.removeItem('user-info')
        } catch (error) {
            showToast("Error", error.message, "error")
        }
    }
    return {handleLogout, isLogging, error}
}
export default useLogout;
