import { Box, Container, Flex, VStack } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react";
const AuthPage = () => {
return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={"4"}>
        <Container maxW={"container.md"} padding={"0"}>
            <Box display={{base:"none", md:"block"}}> 
                <Image src="/auth.png" h={"650"}/>
            </Box>
            <VStack align={"stretch"} textAlign={"center"}>
                <AuthForm/>
                <Box textAlign={"cen"}></Box>
            </VStack>
        </Container>
    </Flex>
)
}

export default AuthPage
