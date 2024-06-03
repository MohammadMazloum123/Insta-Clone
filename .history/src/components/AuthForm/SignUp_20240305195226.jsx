import { Input } from "@chakra-ui/react";
import { useState } from "react";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullname:"",
        username:"",
        email:"",
        password:"",
    });
    return(
        <>
        <Input type="email" placeholder="Email" fontSize={14} value={inputs.email}
                onChange={(e) => setInputs({...inputs, email: e.target.value})}/>
        <Input type="email" placeholder="username" fontSize={14} value={inputs.username}
                onChange={(e) => setInputs({...inputs, email: e.target.value})}/>
        <Input type="email" placeholder="Email" fontSize={14} value={inputs.email}
                onChange={(e) => setInputs({...inputs, email: e.target.value})}/>
        <Input type="password" placeholder="Password" fontSize={14} value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
        </>
    )
}

export default SignUp
