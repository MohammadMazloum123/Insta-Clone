import { useSignOut } from "react-firebase-hooks/auth";


const uselogout = () => {
    const [signOut, loading, error] = useSignOut(auth)
}
export default uselogout;
