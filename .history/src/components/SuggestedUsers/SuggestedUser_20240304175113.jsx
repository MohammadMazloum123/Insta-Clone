import { useState } from "react";
import { Avatar, Flex, Button, VStack, Box } from "@chakra-ui/react";
const SuggestedUser = ({followers, name, avatar}) => {
    const [isFollowed, setIsFollowed] = useState(false)
    return (
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
            <Flex gap={2} alignItems={"center"}>
                <Avatar name={name} />
            </Flex>
        </Flex>
    )
}

export default SuggestedUser;
