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
            _hover={}>

            </Flex>
        </GridItem>
    )
}

export default ProfilePost;
