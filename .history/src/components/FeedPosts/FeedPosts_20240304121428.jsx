import { Container } from "@chakra-ui/react"
import FeedPost from "./FeedPost";

const FeedPosts = () => {
return (
    <Container maxW={"container.sm"} py={10} px={2}>
        <FeedPost img="/img1.png" username="johnny" avatar='/img1.png'/>
        <FeedPost img="/img2.png" username="johnny" avatar='/img1.png'/>
        <FeedPost img="/img3.png" username="johnny" avatar='/img1.png'/>
        <FeedPost img="/img4.png" username="johnny" avatar='/img1.png'/>
    </Container>
)}

export default FeedPosts;
