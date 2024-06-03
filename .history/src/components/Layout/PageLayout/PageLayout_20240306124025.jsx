import { Flex, Box } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import Sidebar from "../../Sidebar/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Firebase/Firebase";
import Navbar from "../../Navbar/Navbar";

const PageLayout = ({children}) => {
    const {pathname} = useLocation();
    const [user, error, loading] = useAuthState(auth);
    const canRenderSidebar = pathname !== "/auth" && user;
    const canRenderNavbar = !user && !loading && pathname !== '/auth';

    const checkingUserIsAuth = !user && loading;
    if (checkingUserIsAuth) return <PageLayoutSpinner/>
    return(
        // {side bar on the left}
        <Flex flexDir={canRenderNavbar ? "column" : "row"}>
            {canRenderSidebar ? (
                <Box w={{base:"70px", md:"240px"}}>
                    <Sidebar/>
                </Box>
            ): null}
            {/* {NavBar} */}
            {canRenderNavbar ? <Navbar/> : null}
            {/* {the page content on the right} */}
            <Box flex={1} w={{base:"calc(100% - 70px)", md:"calc(100% - 240px)"}} mx={"auto"}>
                {children}
            </Box>
        </Flex>
    )
}
export default PageLayout;

const PageLayoutSpinner = () => {
    <Flex flexDir={"column"} justifyContent={"center"} alignItems={"center"} h={100v}>

    </Flex>
}