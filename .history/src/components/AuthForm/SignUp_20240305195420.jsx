import { Input, InputGroup } from "@chakra-ui/react";
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
        <Input type="text" placeholder="username" fontSize={14} value={inputs.username}
                onChange={(e) => setInputs({...inputs, username: e.target.value})}/>
        <Input type="text" placeholder="Fullname" fontSize={14} value={inputs.fullname}
                onChange={(e) => setInputs({...inputs, fullname: e.target.value})}/>
        <InputGroup/>
        </>
    );
};

export default SignUp;
