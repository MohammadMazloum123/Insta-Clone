import { Box, Flex } from "@chakra-ui/react";
import {Link as RouterLink} from "react-router-dom";
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
        <Link></Link>
    </Flex>


    </Box>);
}