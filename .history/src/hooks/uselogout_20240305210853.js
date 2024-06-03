import { useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../Firebase/Firebase";

const uselogout = () => {
    const [signOut, loading, error] = useSignOut(auth);
}
export default uselogout;
