import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Input, InputGroup, InputRightElement, Button, Alert } from "@chakra-ui/react";
import { useState } from "react";
import useSignupwEmailAndPassword from "../../hooks/useSignupwEmailAndPassword";

const SignUp = () => {
    const [inputs, setInputs] = useState({
        fullname:"",
        username:"",
        email:"",
        password:"",
    });
    const [showPassword, setShowpassword] = useState(false);
    const {loading, error, signup} = useSignupwEmailAndPassword()
    return(
        <>
        <Input type="email" size={"sm"} placeholder="Email" fontSize={14} value={inputs.email}
                onChange={(e) => setInputs({...inputs, email: e.target.value})}/>
        <Input type="text" size={"sm"} placeholder="username" fontSize={14} value={inputs.username}
                onChange={(e) => setInputs({...inputs, username: e.target.value})}/>
        <Input type="text" size={"sm"} placeholder="Fullname" fontSize={14} value={inputs.fullname}
                onChange={(e) => setInputs({...inputs, fullname: e.target.value})}/>
        <InputGroup>
            <Input type={showPassword ? "text" : "password"} size={"sm"} placeholder="Password" fontSize={14} value={inputs.password}
                onChange={(e) => setInputs({...inputs, password: e.target.value})}/>

            <InputRightElement h='full'>
                <Button variant={"ghost"} size={"sm"} onClick={() => setShowpassword(!showPassword)}>
                    {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
                </Button>
            </InputRightElement>
        </InputGroup>

        {error && (
            <Alert status={"error"} p={2} borderRadius={4} fontSize={13}>
                

            </Alert>
        )}

        <Button isLoading={loading} w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={() => signup(inputs)}>
                Sign Up
        </Button>
        </>
    );
};

export default SignUp;
