
import { useEffect, useState } from "react"


const ProfilePosts = () => {
    const [isLoading, setIsloading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsloading(false)
        })
    })
    return(
        <div>
            
        </div>
    )
}

export default ProfilePosts
