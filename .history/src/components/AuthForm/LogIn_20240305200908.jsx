import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";


const LogIn = () => {
    const [inputs, setInputs] = useState({
        email:"",
        password:"",
    });
    return(
        <>
        <Input size={"sm"} type="email" placeholder="Email" fontSize={14} value={inputs.email}
                onChange={(e) => setInputs({...inputs, email: e.target.value})}/>
        <Input size={"sm"} type="password" placeholder="Password" fontSize={14} value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}/>

        <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
                    Log In
                </Button>
        </>
    );
};

export default LogIn;
