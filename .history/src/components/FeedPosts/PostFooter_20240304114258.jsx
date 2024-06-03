import { Flex } from "@chakra-ui/react";
import { useState } from "react"


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
            <Flex alignItems={"center"} w={"full"} mt={"auto"} pt={0} mb={2}>

            </Flex>
        </>
    )
};

export default PostFooter
