import { Box, VStack, Image, Input, Button } from "@chakra-ui/react"
import { useState } from "react"

const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <>
        <Box border={"1px solid grey"} padding={5} borderRadius={4}>
            <VStack spacing={4}>
                <Image src="/logo.png" h={24} cursor={"pointer"} alt="Instagram"/>
                <Input type="email" placeholder="Email" fontSize={14}/>
                <Input type="password" placeholder="Password" fontSize={14}/>

                {!isLogin ? <Input type="password" placeholder="Confirm Password" fontSize={14}/> : null}
                <Button>
                    
                </Button>
            </VStack>
            </Box>   
        </>
    )
}

export default AuthForm
