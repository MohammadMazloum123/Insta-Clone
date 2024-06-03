
import { Grid, Skeleton, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react"


const ProfilePosts = () => {
    const [isLoading, setIsloading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsloading(false);
        }, 2000)
    }, [])
    return(
        <Grid
        templateColumns={{
            sm:"repeat(1, 1fr)",
            md:"repeat(3, 1fr)",
        }}
        gap={1}
        columnGap={1}>

        {isLoading && 
        [0, 1, 2, 3, 4].map((_, idx) => (
            <VStack key={idx} alignItems={"flex-start"} gap={4}>
                <Skeleton>
                    
                </Skeleton>
            </VStack>
        ))}
            
        </Grid>
    )
}

export default ProfilePosts
