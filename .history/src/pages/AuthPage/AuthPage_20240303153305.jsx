import { Box, Container, Flex } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react";
const AuthPage = () => {
return (
    <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={"4"}>
        <Container maxW={"container.md"} padding={"0"}>
            <Box display={{base}}> 
                <Image src="/auth.png"/>
            </Box>
        </Container>
    </Flex>
)
}

export default AuthPage
