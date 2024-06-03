import { Avatar, Flex } from "@chakra-ui/react";


const SuggestedHeader = () => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar name="as a programmer" size={"lg"} src="/profilepic.png"/>
                    <Text>
                        
                    </Text>
            </Flex>
        </Flex>
    )
        
        
    
}

export default SuggestedHeader;
