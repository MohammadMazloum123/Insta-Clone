import { Avatar, Flex, Text, Button } from "@chakra-ui/react";
import useLogout from "../../hooks/useLogout";


const SuggestedHeader = () => {
    const {handleLogout, isLoggingout} = useLogout();
    return (
        
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
                <Avatar name="as a programmer" size={"lg"} src="/profilepic.png"/>
                    <Text fontWeight={"bold"} fontSize={12}>
                        as a programmer
                    </Text>
            </Flex>
        
        <Button
        size={"xs"}
        background={"transparent"}
        _hover={{bg:"transparent"}}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        style={{textDecoration:"none"}}
        onClick={handleLogout}
        isLoading={isLoggingout}
        >
            Log out
        </Button>
        </Flex>
    );
};

export default SuggestedHeader;
