import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react"
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
                <Flex gap={2}>
                    <SkeletonCircle size='10'/>
                    <VStack alignItems={"flex-start"} gap={2}>
                        <Skeleton w={"200px"} height='10px'/>
                        <Skeleton w={"200px"} height='10px'/>
                    </VStack>
                </Flex>
                <Skeleton w={"full"}>
                    <Box h={"500px"}>contents wrapped</Box>
                </Skeleton>
            </VStack>
        })}
        {!isLoading && (

        )}
        
    </Container>
)}

export default FeedPosts;
