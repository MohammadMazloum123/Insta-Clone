import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import {CreatePostLogo, InstagramLogo, InstagramMobileLogo, SearchLogo, NotificationsLogo} from "../../assets/constants";
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
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
            {sideBarItems.map((item, index) => (
                <Tooltip
                key={index}
                hasArrow
                label={item.text}
                placement="right"
                ml={1}
                openDelay={500}
                display={{base:"block", md:"none"}}>
                    <Link
                    display={"flex"}
                    to={item.link || null}
                    as={RouterLink}
                    gap={4}
                    alignItems={"center"}
                    borderRadius={6}
                    _hover={{bg:"whiteAlpha.400"}}
                    w={{base: 10, md: "full"}}
                    p={2}
                    justifyContent={{base:"center", md:"flex-start"}}
                    >
                    {item.icon}
                    <Box display={{base:"none", md:"block"}}>
                        {item.text}
                    </Box>
                    </Link>
                </Tooltip>
            ))}
        </Flex>
        <Tooltip
                hasArrow
                label={"Logout"}
                placement="right"
                ml={1}
                openDelay={500}
                display={{base:"block", md:"none"}}>
                    <Link
                    display={"flex"}
                    to={"/auth"}
                    as={RouterLink}
                    gap={4}
                    alignItems={"center"}
                    borderRadius={6}
                    _hover={{bg:"whiteAlpha.400"}}
                    w={{base: 10, md: "full"}}
                    p={2}
                    justifyContent={{base:"center", md:"flex-start"}}
                    >
                    <BiLogOut size={25}/>
                    <Box display={{base:"none", md:"block"}}>
                        Logout
                    </Box>
                    </Link>
                </Tooltip>
    </Flex>

    </Box>);
}
export default SideBar;