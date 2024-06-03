import { GridItem, Flex } from "@chakra-ui/react";


const ProfilePost = () => {
    return(
        <GridItem
        cursor={"pointer"}
        position={"relative"}
        borderRadius={4}
        overflow={"hidden"}
        border={"1px solid"}
        borderColor={"whiteAlpha.300"}
        aspectRatio={1/1}>
            <Flex
            opacity={0}
            _hover={{opacity:1}}
            position={"absolute"}
            top={0}
            left={0}
            right={0}
            bottom={0}
            bg={"blackAlpha.700"}
            transition={"all 0.3s ease"}
            zIndex={1}
            justifyContent={"center"}>

                <Flex alignItems={"center"} >

                </Flex>

            </Flex>
        </GridItem>
    )
}

export default ProfilePost;
