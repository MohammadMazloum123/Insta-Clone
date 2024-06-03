import { Container, Flex, Box } from "@chakra-ui/react"

const HomePage = () => {
    return(
        <Container maxW={"container.lg"}>
            <Flex gap={20}>
                <Box py={2} fle>
                    FeedPosts
                </Box>
            </Flex>
        </Container>
    )
}