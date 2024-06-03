import { Avatar, Flex, Text } from "@chakra-ui/react";
import {Link, Link as RouterLink} from "react-router-dom";

const SuggestedHeader = () => {
    return (
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar name="as a programmer" size={"lg"} src="/profilepic.png"/>
                    <Text fontWeight={"bold"} fontSize={12}>
                        as a programmer
                    </Text>
            </Flex>
        </Flex>

        <Link as={}>
        </Link>
    )
        
        
    
}

export default SuggestedHeader;
