import { Input, InputGroup } from "@chakra-ui/react";
import { useState } from "react";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullname:"",
        username:"",
        email:"",
        password:"",
    });
    const [showPassword, setShowpassword] = useState(false);
    return(
        <>
        <Input type="email" placeholder="Email" fontSize={14} value={inputs.email}
                onChange={(e) => setInputs({...inputs, email: e.target.value})}/>
        <Input type="text" placeholder="username" fontSize={14} value={inputs.username}
                onChange={(e) => setInputs({...inputs, username: e.target.value})}/>
        <Input type="text" size={"sm"} placeholder="Fullname" fontSize={14} value={inputs.fullname}
                onChange={(e) => setInputs({...inputs, fullname: e.target.value})}/>
        <InputGroup>
            <Input type={showPassword ? "text" : "password"} size={"sm"} placeholder="Password" fontSize={14} value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
        </InputGroup>
        </>
    );
};

export default SignUp;
