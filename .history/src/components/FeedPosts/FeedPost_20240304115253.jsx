import PostFooter from "./PostFooter";
import PostHeader from "./PostHeader";
import {Box, Image} from "@chakra-ui/react";
const FeedPost = () => {
    return (
        <>
        <PostHeader/>
        <Box>
            <Image src="/img1.png" alt="user profile pic"/>
        </Box>
        <PostFooter
        </>
    );
}

export default FeedPost;
