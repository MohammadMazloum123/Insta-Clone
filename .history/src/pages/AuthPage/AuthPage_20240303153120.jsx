import { Box, Container, Flex } from "@chakra-ui/react"
import { Image } from "@chakra-ui/react";
const AuthPage = () => {
return (
    <Flex minH={}>
        <Container>
            <Box>
                <Image src="/auth.png"/>
            </Box>
        </Container>
    </Flex>
)
}

export default AuthPage
