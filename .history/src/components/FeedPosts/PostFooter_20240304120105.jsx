import { Flex, Box, Text, InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import { useState } from "react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants";


const PostFooter = () => {
    const [liked, setliked] = useState(false);
    const [likes, setlikes] = useState(1000);

    const handleLike = () => {
        if (liked){
            setliked(false);
            setlikes(likes - 1)
        }
        else{
            setliked(true);
            setlikes(likes + 1)
        }
    }
    return (
        <>
            <Flex alignItems={"center"} w={"full"} mt={4} pt={0} mb={2} gap={4}>
                <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
                    {!liked ? <NotificationsLogo/> : <UnlikeLogo/>}
                </Box>
                <Box fontSize={18} cursor={"pointer"}>
                    <CommentLogo/>
                </Box>
            </Flex>
            <Text fontWeight={600} fontSize={"sm"}>
                {likes} likes
            </Text>
            <Text fontSize={"sm"} fontWeight={700}>
                asaprogrammer_{" "}
                <Text as={'span'} fontWeight={400}>
                    Feeling Shit
                </Text>
            </Text>
            <Text fontSize="sm" color={"gray"}>
                view all 123 comments
            </Text>
            <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={2}
            w={"full"}>
                <InputGroup>
                    <Input fontSize={14} variant={"flushed"} placeContent={"Add a comment..."}>
                        <InputRightElement>
                            <Button
                            fontWeight={400}>

                            </Button>
                        </InputRightElement>
                    </Input>

                </InputGroup>
            </Flex>
        </>
    )
};

export default PostFooter;
