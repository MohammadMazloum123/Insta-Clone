import { Flex, Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Firebase/Firebase";


const PageLayout = ({children}) => {
    const {pathname} = useLocation();
    const [user, error, loading] = useAuthState(auth);
    const canRenderSidebar = pathname !== "/auth" && user;
    const canRenderNavbar = !user && !loading && !pathname !== '/auth';
    return(
        // {side bar on the left}
        <Flex>
            {canRenderSidebar ? (
                <Box w={{base:"70px", md:"240px"}}>
                    <Sidebar/>
                </Box>
            ): null}
            {Na}
            {/* {the page content on the right} */}
            <Box flex={1} w={{base:"calc(100% - 70px)", md:"calc(100% - 240px)"}}>
                {children}
            </Box>
        </Flex>
    )
}
export default PageLayout;