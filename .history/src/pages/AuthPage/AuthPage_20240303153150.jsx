import { Box, Container, Flex } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react";
const AuthPage = () => {
return (
    <Flex minH={"100vh"} justifyContent={"center"}>
        <Container>
            <Box>
                <Image src="/auth.png"/>
            </Box>
        </Container>
    </Flex>
)
}

export default AuthPage
