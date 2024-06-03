import { Input } from "@chakra-ui/react";
import usestat
const LogIn = () => {
    const AuthForm = () => {
        const [isLogin, setIsLogin] = useState(true);
        const [inputs, setInputs] = useState({
            email:"",
            password:"",
    });
    return(
        <>
        <Input type="email" placeholder="Email" fontSize={14} value={inputs.email}
                onChange={(e) => setInputs({...inputs, email: e.target.value})}/>
        <Input type="password" placeholder="Password" fontSize={14} value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
        </>
    )
}

export default LogIn
