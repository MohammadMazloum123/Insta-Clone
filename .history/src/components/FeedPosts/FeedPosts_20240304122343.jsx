import { Container, Flex, VStack } from "@chakra-ui/react"
import FeedPost from "./FeedPost";
import { useEffect, useState } from "react";

const FeedPosts = () => {
    const [isLoading, setIsloading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsloading(false);
        }, 2000)
    }, [])
return (
    <Container maxW={"container.sm"} py={10} px={2}>
        {isLoading && [0, 1, 2, 3].map((_, idx) => {
            <VStack alignItems={"flex-start"} mb={10} key={idx} gap={4}>
                <Flex>
                    
                </Flex>
            </VStack>
        })}
        <FeedPost img="/img1.png" username="johnny" avatar='/img1.png'/>
        <FeedPost img="/img2.png" username="michel" avatar='/img2.png'/>
        <FeedPost img="/img3.png" username="open mikel" avatar='/img3.png'/>
        <FeedPost img="/img4.png" username="shakar" avatar='/img4.png'/>
    </Container>
)}

export default FeedPosts;
