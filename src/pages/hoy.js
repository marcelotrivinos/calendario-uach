import { Today } from "../Components/Navigation";
import { Text, Stack } from "@chakra-ui/react";
import data from "../data/ejemplo.json";
import { Timeline } from "../Components/Timeline";
const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
export default function IndexPage() {
  const mesIndex = new Date().getMonth();
  const year = new Date().getFullYear();
  const dataYear = data[year];

  if (!dataYear) return <Text>Año no encontrado</Text>;
  const mes = meses[mesIndex];
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
