import { Box, Container, Flex, VStack, Image } from "@chakra-ui/react"
import AuthForm from "../../components/AuthForm/AuthForm"
const AuthPage = () => {
return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
        <Container maxW={"container.md"} padding={0}>
            <Flex gap={10} justifyContent={"center"} alignItems={"center"}>
            <Box display={{base:"none", md:"block"}}> 
                <Image src="/auth.png" h={650} alt="Phone img"/>
            </Box>
            <VStack align={"stretch"} spacing={4}>
                <AuthForm/>
                <Box textAlign={"center"}>Get the app.</Box>
                <Flex gap={5} justifyContent={"center"}>
                    <Image src="/playstore.png" h={"10"} alt="Playstore img"/>
                    <Image src="/microsoft.png" h={"10"} alt="Microsoft img"/>
                </Flex>
            </VStack>
            </Flex>
            
        </Container>
    </Flex>
)
}

export default AuthPage
