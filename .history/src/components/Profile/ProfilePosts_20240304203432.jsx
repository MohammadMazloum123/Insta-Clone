
import { Grid } from "@chakra-ui/react";
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

        {isLoading }
            
        </Grid>
    )
}

export default ProfilePosts
