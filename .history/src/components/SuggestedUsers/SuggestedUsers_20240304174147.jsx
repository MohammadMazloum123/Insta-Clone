import SuggestedHeader from "./SuggestedHeader";
import { VStack, Flex, Text, Box } from "@chakra-ui/react";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader/>

            <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
                <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                    Suggested For you
                </Text> 
                <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.500"}} cursor={"pointer"}>
                    See All
                </Text> 
            </Flex>

            <SuggestedUser/>
            <SuggestedUser/>
            <SuggestedUser/>

            <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
                Built by 2026
                <Link fontSize={14} color={"blue.500"}>
                </Link>
            </Box>
        </VStack>
    )
};

export default SuggestedUsers;
