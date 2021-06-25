import { CircularNavigation2 } from "../Components/Navigation";
import { Stack } from "@chakra-ui/react";
export default function IndexPage() {
  return (
    <Stack
      backgroundColor="rgb(254,214,70)"
      backgroundRepeat="repeat-x"
      backgroundImage="url(/logo1nuevo.png)"
      backgroundSize="110px"
      backgroundPosition="bottom"
      width="100vw"
      height="100vh"
    >
      <CircularNavigation2 />
    </Stack>
  );
}
