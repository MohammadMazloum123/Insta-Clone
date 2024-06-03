import { Container, Flex, Box } from "@chakra-ui/react"
import 
const HomePage = () => {
    return(
        <Container maxW={"container.lg"}>
            <Flex gap={20}>
                <Box py={10} flex={2} border={"1px solid blue"}>
                    <FeedPosts/>
                </Box>
                <Box flex={3} mr={20} display={{ base: "none", lg: "block"}} maxW={"300px"} border={"1px solid red"}>
                    jhdcgcd
                </Box>
            </Flex>
        </Container>
    );
};
export default HomePage;