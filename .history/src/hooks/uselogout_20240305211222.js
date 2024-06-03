import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Firebase";
import useShowToast from "./useShowToast";

const useLogout = () => {
    const [signOut, loading, error] = useSignOut(auth);
    const showToast = useShowToast();
    const handleLogout = async () => {
        try {
            await signOut();
            localStorage.removeItem('user-info')
        } catch (error) {
            showToast("Error", error.message, "")
        }
    }
    return {handleLogout, loading, error}
}
export default useLogout;
