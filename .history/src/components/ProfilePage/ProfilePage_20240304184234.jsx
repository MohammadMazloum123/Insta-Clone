import { Container, Flex } from "@chakra-ui/react";
import ProfileHeader from "../Profile/ProfileHeader";

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
                <Profilepos
            </Flex>
        </Container>
    )
}

export default ProfilePage;
