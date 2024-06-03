import { Box, VStack, Image } from "@chakra-ui/react"


const AuthForm = () => {
return (
    <>
     <Box border={"1px solid grey"} padding={5} borderRadius={4}>
        <VStack spacing={4}>
            <Image src="/logo.png" h={24} alt="Instagram"/>
        </VStack>
        </Box>   
    </>
)
}

export default AuthForm
