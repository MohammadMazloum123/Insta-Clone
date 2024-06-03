import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Firebase";

const useLogout = () => {
    const [signOut, loading, error] = useSignOut(auth);

    const handleLogout = async () => {

    }
    return {handleLogout, loading, error}
}
export default useLogout;
