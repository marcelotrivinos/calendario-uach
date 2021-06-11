import { CircularNavigation } from "../Components/Navigation";
import { Stack } from "@chakra-ui/react";
export default function IndexPage() {
  return (
    <Stack
      backgroundColor="cyan.500"
      backgroundRepeat="repeat-x"
      backgroundImage="url(/logo512.png)"
      backgroundPosition="bottom"
      width="100vw"
      height="100vh"
    >
      <CircularNavigation />
    </Stack>
  );
}
