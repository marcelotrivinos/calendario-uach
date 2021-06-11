import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function PaginaMes() {
    const router = useRouter()
    const { mes } = router.query
    return <Text>{ mes }</Text>;
}