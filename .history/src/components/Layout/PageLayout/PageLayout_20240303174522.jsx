import { Flex, Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const PageLayout = ({children}) => {
    const {pathname} = useLocation();
    return(
        <Flex>
            {pathname !== "/auth" ? (
                <Box w={}>

                </Box>
            )}
        </Flex>
    )
}