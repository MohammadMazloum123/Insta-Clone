import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Firebase";
import useShowToast from "./useShowToast";
import useAuthStore from "../store/authStore";

const useLogout = () => {
    const [signOut, isLoggingout, error] = useSignOut(auth);
    const showToast = useShowToast();
    const logoutUser = useAuthStore(state => state.logout);
    const handleLogout = async () => {
        try {
            await signOut();
            localStorage.removeItem('user-info')
        } catch (error) {
            showToast("Error", error.message, "error")
        }
    }
    return {handleLogout, isLoggingout, error}
}
export default useLogout;
