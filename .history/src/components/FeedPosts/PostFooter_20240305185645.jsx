import { Flex, Box, Text, InputGroup, Input, InputRightElement, Button } from "@chakra-ui/react";
import { useState } from "react"
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assets/constants";


const PostFooter = ({username, isProfilePage}) => {
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
        <Box mb={10} marginTop={"auto"}>
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
            {!isloa}
            <Flex
            alignItems={"center"}
            justifyContent={"space-between"}
            gap={2}
            w={"full"}>
                <InputGroup>
                    <Input fontSize={14} variant={"flushed"} placeholder={"Add a comment..."}/>
                        <InputRightElement>
                            <Button
                            fontWeight={600}
                            fontSize={14}
                            cursor={"pointer"}
                            color={"blue.500"}
                            _hover={{color:"white"}}
                            bg={"transparent"}>
                                Post
                            </Button>
                        </InputRightElement>
                    
                </InputGroup>
            </Flex>
        </Box>
    )
};

export default PostFooter;
