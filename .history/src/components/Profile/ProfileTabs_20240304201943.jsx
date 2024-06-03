import { Flex, Box, Text } from "@chakra-ui/react";
import {BsGrid3X3, BsSuitHeart} from "react-icons/bs"
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
            borderTop={"1px solid white"}
            gap={1}
            cursor={"pointer"}>
                <Box fontSize={20}>
                    <BsGrid3X3/>
                    <Text fontSize={12} display={{base:"none", sm:"block"}}>Posts</Text>
                </Box>
            </Flex>
            <Flex
            p="3"
            alignItems={"center"}
            gap={1}
            cursor={"pointer"}>
                <Box fontSize={20}>
                    <BsGrid3X3/>
                    <Text fontSize={12} display={{base:"none", sm:"block"}}>Saved</Text>
                </Box>
            </Flex>
            <Flex
            p="3"
            alignItems={"center"}
            gap={1}
            cursor={"pointer"}>
                <Box fontSize={20}>
                    <BsSuitHeart fontWeight={}/>
                    <Text fontSize={12} display={{base:"none", sm:"block"}}>Likes</Text>
                </Box>
            </Flex>
        </Flex>
    );
};

export default ProfileTabs;
