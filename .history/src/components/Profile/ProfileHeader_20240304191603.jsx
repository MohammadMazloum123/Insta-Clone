import { Avatar, AvatarGroup, Flex, VStack, Text, Button } from "@chakra-ui/react";


const ProfileHeader = () => {
    return (
        <Flex gap={{base:4, sm:10}} py={10} direction={{base:"column", sm:"row"}}>
            <AvatarGroup
            size={{base:"xl", md:"2xl"}}
            justifySelf={"center"}
            alignSelf={"flex-start"}
            mx={"auto"}>
                <Avatar src="/profilepic.png" name="as a programmer" alt="as a programmer logo"/>
            </AvatarGroup>

            <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
                <Flex
                alignItems={"center"}
                gap={4}
                direction={{base:"column", sm:"row"}}
                justifyContent={{base:"center", md:"flex-start"}}
                w={"full"}>
                    <Text fontSize={{base:"sm", md:"lg"}}>asaprogrammer_</Text>

                    <Flex justifyContent={"center"} alignItems={"center"} gap={4}>
                        <Button bg={"white"} color={"black"} _hover={{bg:"whiteAlpha.800"}} size={{base:""}}>

                        </Button>
                    </Flex>
                </Flex>
            </VStack>
        </Flex>
    )
};

export default ProfileHeader;
