
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
            sm:"repeat("
        }}>
            
        </Grid>
    )
}

export default ProfilePosts
