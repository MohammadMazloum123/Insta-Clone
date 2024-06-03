import { Box, VStack, Image, Input } from "@chakra-ui/react"


const AuthForm = () => {
return (
    <>
     <Box border={"1px solid grey"} padding={5} borderRadius={4}>
        <VStack spacing={4}>
            <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram"/>
            <Input
            />
        </VStack>
        </Box>   
    </>
)
}

export default AuthForm
