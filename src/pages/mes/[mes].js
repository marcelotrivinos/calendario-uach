import { Text, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Timeline } from "../../Components/Timeline";

export default function PaginaMes() {
  const router = useRouter();
  const { mes } = router.query;
  return (
    <Stack
      backgroundColor="rgb(254,214,70)"
      backgroundRepeat="repeat-x"
      backgroundImage="url(/logo1.png)"
      backgroundSize="110px"
      backgroundPosition="bottom"
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="space-around"
    >
      <Timeline mes={mes} />
    </Stack>
  );
}
