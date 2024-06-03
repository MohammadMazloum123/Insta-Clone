import { useSignOut } from "react-firebase-hooks/auth";
import {auth}

const uselogout = () => {
    const [signOut, loading, error] = useSignOut(auth);
}
export default uselogout;
