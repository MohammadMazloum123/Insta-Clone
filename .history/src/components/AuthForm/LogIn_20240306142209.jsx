import { Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";
import {}

const LogIn = () => {
    const [inputs, setInputs] = useState({
        email:"",
        password:"",
    });
    const {loading, error, login} = useLogin();
    return(
        <>
        <Input size={"sm"} type="email" placeholder="Email" fontSize={14} value={inputs.email}
                onChange={(e) => setInputs({...inputs, email: e.target.value})}/>
        <Input size={"sm"} type="password" placeholder="Password" fontSize={14} value={inputs.password}
            onChange={(e) => setInputs({...inputs, password: e.target.value})}/>
        {error && (
        <Alert status={"error"} p={2} borderRadius={4} fontSize={13}>
            <AlertIcon fontSize={12}/>
                {error.message}
        </Alert>
    )}

        <Button isLoading={loading} w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={() => login(inputs)}>
                    Log In
                </Button>
        </>
    );
};

export default LogIn;
