import { Flex, Box, Text } from "@chakra-ui/react";
import {BsGrid3x3} from "react-icons/bs"
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
                    <BsGrid3x3/>
                    <Text fontSize={20} display={{base:"none", }}></Text>
                </Box>
            </Flex>
        </Flex>
    )
}

export default ProfileTabs;
