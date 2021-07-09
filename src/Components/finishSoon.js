import { Stack, Button, Box, HStack, InputLeftElement } from "@chakra-ui/react";
import { useRouter } from "next/router";
import ScrollContainer from "react-indiana-drag-scroll";

let fechaMasCercanaPorTerminar = (fechasDelMes) => {
  let fechaActual = new Date();
  let fechaMasCercana = Math.abs(fechaActual.getTime() - new Date(fechasDelMes[0].final).getTime());
  let indiceMasCercano = 0;
  for (let i = 1; i < fechasDelMes.length; i++) {
    let fechaComparada = new Date(fechasDelMes[i].final).getTime();

    if (
      Math.abs(
        fechaActual.getTime() - fechaComparada
      ) < fechaMasCercana
    ) {
      fechaMasCercana = Math.abs(
        fechaActual.getTime() - fechaComparada
      );
      indiceMasCercano = i;
    }
  }
  return indiceMasCercano;
};

let fechaMasCercanaPorIniciar = (fechasDelMes) => {
  let fechaActual = new Date();
  let fechaMasCercana = Math.abs(fechaActual.getTime() - new Date(fechasDelMes[0].final).getTime());
  let indiceMasCercano = 0;
  for (let i = 1; i < fechasDelMes.length; i++) {
    let fechaComparada = new Date(fechasDelMes[i].inicio).getTime();
    let fechaFinalDeComparada = new Date(fechasDelMes[i].final).getTime()

    if (
      (Math.abs(
        fechaActual.getTime() - fechaComparada
      ) < fechaMasCercana) &&
      (fechaComparada != fechaFinalDeComparada)) {
      fechaMasCercana = Math.abs(
        fechaActual.getTime() - fechaComparada
      );
      indiceMasCercano = i;
    }
  }
  return indiceMasCercano;
};

let cantDias = (fecha1, fecha2) => { 
  let dif = (fecha1.getTime() - fecha2.getTime())
  let diaActual = (new Date).getDay()
  let diaPlazo = (new Date(dif)).getDay()
  return (diaActual - diaPlazo)
}

let mensaje1 = (dias) => {
  if(dias == 1) {
    return "¡QUEDA " + dias + " DÍA!"
  }
  else {
    return "¡QUEDAN " + dias + " DÍAS!"
  }
}

let mensaje2 = (dias) => {
  if(dias == 1) {
    return "¡Empieza en " + dias + " día!"
  }
  else {
    return "¡Empieza en " + dias + " días!"
  }
}

export const FinishSoon = ({ mes, data }) => {
  let fechaActual = new Date();
  const router = useRouter();
  return (
    <ScrollContainer>
      <Box display="block" width="100vw">
        <Stack width="100%">
          return (
          <Stack align="center" minWidth="250px" padding="50px">
            <Box fontWeight="semibold" p={10}>
              {"HOY es " + fechaActual.getDate() + " de " + mes}
            </Box>
            <Button
              background="green.300"
              borderWidth="5px"
              borderColor="green.500"
              onClick={() => {
                router.push("/hoy");
              }}
            >
              {"Click aquí para IR AL MES"}
            </Button>
            <Box
              background="blue.400"
              borderWidth="5px"
              borderColor="blue.500"
              borderRadius="10px"
              padding="0.5em"
            >
              {"Plazo más proximo a terminar o comenzar:"}
            </Box>
            <HStack align="center">
              <Box
                background="red.400"
                borderWidth="5px"
                borderColor="red.500"
                borderRadius="10px"
                padding="0.5em"
              >
                { data[fechaMasCercanaPorTerminar(data)].informacion }
              </Box>
              <Box
                background="red.400"
                borderWidth="5px"
                borderColor="red.500"
                borderRadius="10px"
                padding="0.5em"
              >
                {mensaje1(cantDias(new Date(data[fechaMasCercanaPorTerminar(data)].final), fechaActual)) }
              </Box>
            </HStack>
            <HStack align="center">
              <Box
                background="blue.400"
                borderWidth="5px"
                borderColor="blue.500"
                borderRadius="10px"
                padding="0.5em"
              >
                {data[fechaMasCercanaPorIniciar(data)].informacion}
              </Box>
              <Box
                background="blue.400"
                borderWidth="5px"
                borderColor="blue.500"
                borderRadius="10px"
                padding="0.5em"
              >
                {mensaje2(cantDias(new Date(data[fechaMasCercanaPorTerminar(data)].inicio), fechaActual))}
              </Box>
            </HStack>
          </Stack>
        </Stack>
      </Box>
    </ScrollContainer>
  );
};
