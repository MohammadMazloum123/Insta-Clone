import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Firebase";

const useLogout = () => {
    const [signOut, loading, error] = useSignOut(auth);
}
export default useLogout;
