import { Container, Flex, Box } from "@chakra-ui/react"

const HomePage = () => {
    return(
        <Container maxW={"container.lg"}>
            <Flex gap={20}>
                <Box py={10} flex={2}>
                    FeedPosts
                </Box>
                <Box flex={3} mr={20} display={{base:"none", lg:"block"}} a>

                </Box>
            </Flex>
        </Container>
    )
}