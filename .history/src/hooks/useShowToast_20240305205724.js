import { useToast } from "@chakra-ui/react";


const useShowToast = () => {
    const toast = useToast();
    const showToast = (title, description, status) => {
        toast({
            title: title,
            description: description,
            status: status,
            duration:3000,
            is
        }
            

        )
    }
}

export default useShowToast;
