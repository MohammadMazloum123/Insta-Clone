import { Avatar, Box, Flex, Link } from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import {CreatePostLogo, InstagramLogo, InstagramMobileLogo, SearchLogo, NotificationsLogo} from "../../assets/contants";
import {AiFillHome} from "react-icons/ai"

const SideBar = () => {
    const sideBarItems = [
        {
            icon:<AiFillHome size={25}/>,
            text:"Home",
            link:"/"
        },
        {
            icon:<SearchLogo/>,
            text:"Search"
        },
        {
            icon:<NotificationsLogo/>,
            text:"Notifications",
        },
        {
            icon:<CreatePostLogo/>,
            text:"create",
        },
        {
            icon:<Avatar size={"sm"} name="Burak orkmez" src="/profilepic.png" />,
            text:"profile",
            link:"/asaprogrammer",
        },
    ]
    return( <Box
    height={"100vh"}
    borderRight={"1px solid"}
    borderColor={"whiteAlpha.300"}
    py={8}
    position={"sticky"}
    top={0}
    left={0}
    px={{base:2, md:4}}>
    
    <Flex direction={"column"} w={"full"} height={"full"} gap={10}>
        <Link to={"/"} as={RouterLink} pl={2} display={{base:"none", md:"block"}} cursor={"pointer"}>
            <InstagramLogo/>
        </Link>
        <Link to={"/"} as={RouterLink} p={2} display={{base:"block", md:"none"}} cursor={"pointer"}
        borderRadius={6} w={10} _hover={{bg:"whiteAlpha.200"}}>
            <InstagramMobileLogo/>
        </Link>
        <Flex>
            
        </Flex>
    </Flex>

    </Box>);
}
export default SideBar;