import { Box, Container, Flex, VStack, Image } from "@chakra-ui/react"
import AuthForm from "../../components/AuthForm/AuthForm"
const AuthPage = () => {
return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={"4"}>
        <Container maxW={"container.md"} padding={"0"}>
            <Flex>
            <Box display={{base:"none", md:"block"}}> 
                <Image src="/auth.png" h={"650"} alt="Phone img"/>
            </Box>
            </Flex>
            <VStack align={"stretch"} textAlign={"center"}>
                <AuthForm/>
                <Box textAlign={"center"}>Get the app.</Box>
                <Flex gap={"5"} justifyContent={"center"}>
                    <Image src="/playstore.png"/>
                    <Image src="/playstore.png"/>
                </Flex>
            </VStack>
        </Container>
    </Flex>
)
}

export default AuthPage
