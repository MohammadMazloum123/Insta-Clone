import { Container } from "@chakra-ui/react"
import FeedPost from "./FeedPost";
import { useState } from "react";

const FeedPosts = () => {
    const [isLoading, setIsloading] = useState(true);
    
return (
    <Container maxW={"container.sm"} py={10} px={2}>
        <FeedPost img="/img1.png" username="johnny" avatar='/img1.png'/>
        <FeedPost img="/img2.png" username="michel" avatar='/img2.png'/>
        <FeedPost img="/img3.png" username="open mikel" avatar='/img3.png'/>
        <FeedPost img="/img4.png" username="shakar" avatar='/img4.png'/>
    </Container>
)}

export default FeedPosts;
