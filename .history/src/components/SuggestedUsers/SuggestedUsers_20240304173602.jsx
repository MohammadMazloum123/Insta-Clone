import SuggestedHeader from "./SuggestedHeader";
import { VStack, Flex, Text } from "@chakra-ui/react";
const SuggestedUsers = () => {
    return (
        <VStack py={8} px={6} gap={4}>
            <SuggestedHeader/>

            <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
                <Text fontSize={12} fontWeight={"bold"} >

                </Text>
            </Flex>
        </VStack>
    )
};

export default SuggestedUsers;
