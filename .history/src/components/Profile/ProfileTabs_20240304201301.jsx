import { Flex } from "@chakra-ui/react";

const ProfileTabs = () => {
    return(
        <Flex
        w={"full"}
        justifyContent={"center"}
        fontWeight={"bold"}
        gap={{base:4, sm:10}}
        textTransform={"uppercase"}>
            <Flex
            p="3"
            alignItems={"center"}
            borderTop={"1px solid white"}>

            </Flex>
        </Flex>
    )
}

export default ProfileTabs;
