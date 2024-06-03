import { Container, Flex, Box } from "@chakra-ui/react"

const HomePage = () => {
    return(
        <Container maxW={"container.lg"}>
            <Flex gap={20}>
                <Box py={10} flex={2}>
                    FeedPosts
                </Box>
                
            </Flex>
        </Container>
    )
}