import { Box, VStack, Image, Input, Button, Flex, Text } from "@chakra-ui/react";
import { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
});

    return (
        <>
        <Box border={"1px solid gray"} padding={5} borderRadius={4}>
            <VStack spacing={4}>
                <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram"/>
                
                {isLogin ? <LogIn/> : <SignUp}
                <Flex justifyContent={"center"} alignItems={"center"} my={4} w={"full"}>
                    <Box flex={2} bg={"gray.400"} h={"1px"}/>
                    <Text mx={1} color={"white"} > 
                        OR
                    </Text>
                    <Box flex={2} bg={"gray.400"} h={"1px"}/>
                </Flex>
                <Flex  justifyContent={"center"} alignItems={"center"} cursor={"pointer"}>
                    <Image w={5} src="/google.png" alt="google logo"/>
                    <Text color={"blue.500"} mx={2}>
                        Log In with google
                    </Text>
                </Flex>
            </VStack>
            </Box>

            <Box border={"1px solid gray"} padding={5} borderRadius={4}>
                <Flex alignItems={"center"} justifyContent={"center"}>
                    <Box mx={2} fontSize={14}>
                        {isLogin ? "Don't have an account?" : "Already have an account"}
                    </Box>
                    <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}> 
                        {isLogin ? "Sign up" : "Log In"}
                    </Box>
                </Flex>
            </Box>
        </>
    )
}
export default AuthForm;
