import { Stack, Button, Box, HStack, InputLeftElement } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import ScrollContainer from "react-indiana-drag-scroll";

let fechaMasCercana = ({ fechasDelMes }) => {
  let fechaActual = new Date();
  let fechaMasCercana = -1;
  let indiceMasCercano = -1;
    for(let i = 0; i < fechasDelMes.lenght(); i++) {      
      if(Math.abs(fechaActual.getTime() - new Date(fechasDelMes[i].final).getTime()) < fechaMasCercana) {
        fechaMasCercana = Math.abs(fechaActual.getTime() - new Date(fechasDelMes[i].final).getTime());
        indiceMasCercano = i;
      }
    }
    console.log(indiceMasCercano);
    return indiceMasCercano;
};


export const FinishSoon = ({ mes, data }) => {
  let fechaActual = new Date();
  const router = useRouter();
    return (
        <ScrollContainer>
          <Box display="block" width="100vw">
            <Stack width="100%">
                return (
                <Stack
                  align="center"
                  minWidth="250px"
                  padding="50px"
                >
                  <Box fontWeight="semibold" p={10}>
                    { "HOY es " + fechaActual.getDay() + " de " + mes }
                  </Box>
                  <Button background="green.400" borderWidth="5px" borderColor="green.500"
                    onClick={() => {
                        router.push("/hoy");
                    }}
                  >
                    { "Click aquí para IR AL MES" }
                  </Button>
                  <Box background="blue.400" borderWidth="5px" borderColor="blue.500" borderRadius="10px" padding="0.5em">
                    {"Plazo más proximo a terminar o comenzar:"}
                  </Box>
                  <HStack align="center">
                    <Box background="red.400" borderWidth="5px" borderColor="red.500" borderRadius="10px" padding="0.5em">
                      { //fechaMasCercana(data) 
                      } 
                    </Box>
                    <Box background="red.400" borderWidth="5px" borderColor="red.500" borderRadius="10px" padding="0.5em">
                        {"¡QUEDAN " + " DÍAS!"}
                    </Box>
                  </HStack>
                  <HStack align="center">
                    <Box background="blue.400" borderWidth="5px" borderColor="blue.500" borderRadius="10px" padding="0.5em">
                      {
                      }
                    </Box>
                    <Box background="blue.400" borderWidth="5px" borderColor="blue.500" borderRadius="10px" padding="0.5em">
                      { "¡Empieza en " + " días" }
                    </Box>
                  </HStack>
                </Stack>
            </Stack>
          </Box>
        </ScrollContainer>
    );
};