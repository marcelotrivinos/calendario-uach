import { Text, Stack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Timeline } from "../../Components/Timeline";
import data from "../../data/calendar.json";

export default function PaginaMes() {
  const router = useRouter();
  const { mes } = router.query;
  const year = new Date().getFullYear();
  const dataYear = data[year];

  if (!dataYear) return <Text>Año no encontrado</Text>;
  const dataMonth = dataYear[mes];

  if (!dataMonth) return <Text>Mes no encontrado</Text>;

  return (
    <Stack
      backgroundColor="rgb(254,214,70)"
      backgroundRepeat="repeat-x"
      backgroundImage="url(/logo1nuevo.png)"
      backgroundSize="110px"
      backgroundPosition="bottom"
      width="100vw"
      overflowX="auto"
      height="100vh"
      alignItems="center"
      justifyContent="space-around"
    >
      <Timeline mes={mes} data={dataMonth} />
    </Stack>
  );
}
