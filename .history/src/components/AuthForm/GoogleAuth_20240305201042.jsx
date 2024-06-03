
const GoogleAuth = () => {
    return(
        <Flex  justifyContent={"center"} alignItems={"center"} cursor={"pointer"}>
            <Image w={5} src="/google.png" alt="google logo"/>
                <Text color={"blue.500"} mx={2}>
                Log In with google
            </Text>
        </Flex>
    );
}

export default GoogleAuth
