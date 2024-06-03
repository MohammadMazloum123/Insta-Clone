import { Container, Flex } from "@chakra-ui/react";
import ProfileHeader from "../Profile/ProfileHeader";
import ProfilePosts from "../Profile/ProfilePosts";

const ProfilePage = () => {
    return(
        <Container maxW={"container.lg"} py={5}>
            <Flex
            py={10}
            px={4}
            pl={{base:4, md:10}}
            w={"full"}
            mx={"auto"}
            flexDirection={"column"}>
                <ProfileHeader/>
            </Flex>
            <Flex>
                <ProfilePosts
            </Flex>
        </Container>
    )
}

export default ProfilePage;
