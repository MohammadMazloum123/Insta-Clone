import { useToast } from "@chakra-ui/react";
import { checkTargetForNewValues } from "framer-motion";


const useShowToast = () => {
    const toast = useToast();
    const showToast = (title, description, status) => {
        toast({
            title: title,
            description: description,
            status: status,
            duration:3000,
            isClosable:checkTargetForNewValues
        }
            

        )
    }
}

export default useShowToast;
