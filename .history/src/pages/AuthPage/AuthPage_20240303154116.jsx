import { Box, Container, Flex, VStack, Image } from "@chakra-ui/react"
import AuthForm from "../../components/AuthForm/AuthForm"
const AuthPage = () => {
return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={"4"}>
        <Container maxW={"container.md"} padding={"0"}>
            
            <VStack align={"stretch"} textAlign={"center"}>
                <AuthForm/>
                <Box textAlign={"center"}>Get the app.</Box>
            </VStack>
        </Container>
    </Flex>
)
}

export default AuthPage
