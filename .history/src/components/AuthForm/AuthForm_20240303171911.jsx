import { Box, VStack, Image, Input, Button, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <>
        <Box border={"1px solid gray"} padding={5} borderRadius={4}>
            <VStack spacing={4}>
                <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram"/>
                <Input type="email" placeholder="Email" fontSize={14}/>
                <Input type="password" placeholder="Password" fontSize={14}/>

                {!isLogin ? <Input type="password" placeholder="Confirm Password" fontSize={14}/> : null}
                <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
                    {isLogin ? "Log In" : "Sign Up"}
                </Button>
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
                    <Box>
                        
                    </Box>
                    <Box></Box>
                </Flex>
            </Box>
        </>
    )
}

export default AuthForm
