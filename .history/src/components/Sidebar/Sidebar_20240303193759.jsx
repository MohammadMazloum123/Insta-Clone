import { Box, Flex, Link } from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
import {InstagramLogo, InstagramMobileLogo} from "@chakra-ui/react";


const SideBar = () => {
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
        borderRadius={6} w={10} _hover={{bg:}}>
            <InstagramMobileLogo/>
        </Link>
    </Flex>


    </Box>);
}