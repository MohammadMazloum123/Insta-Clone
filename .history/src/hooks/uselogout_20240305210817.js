import { useSignOut } from "react-firebase-hooks/auth";


const uselogout = () => {
    const [signOut, loading, error] = useSignOut(auith)
}
export default uselogout;
