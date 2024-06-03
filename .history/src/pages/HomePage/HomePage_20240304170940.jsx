import { Container, Flex, Box } from "@chakra-ui/react"
import FeedPosts from "../../components/FeedPosts/FeedPosts";
import sy
const HomePage = () => {
    return(
        <Container maxW={"container.lg"}>
            <Flex gap={20}>
                <Box py={10} flex={2}>
                    <FeedPosts/>
                </Box>
                <Box flex={3} mr={20} display={{ base: "none", lg: "block"}} maxW={"300px"}>
                    <SuggestedUsers/>
                </Box>
            </Flex>
        </Container>
    );
};
export default HomePage;