import { Flex, Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";

const PageLayout = ({children}) => {
    const {pathname} = useLocation();
    return(
        
        <Flex>
            {pathname !== "/auth" ? (
                <Box w={{base:"70px", md:"240px"}}>
                    <Sidebar/>
                </Box>
            ): null}
        </Flex>
    )
}