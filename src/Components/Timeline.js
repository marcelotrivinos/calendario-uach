import { useState } from "react";
import { Stack, Button, Box, HStack, InputLeftElement } from "@chakra-ui/react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import ScrollContainer from "react-indiana-drag-scroll";

let colores = ["red.400", "yellow.400", "green.400", "blue.400"];
let coloresBorde = ["red.500", "yellow.500", "green.500", "blue.500"];

export const Timeline = ({ mes, data }) => {
  return (
    <ScrollContainer>
      <Box display="block" width="100vw">
        <HStack width="100%">
          {data.map(({ informacion, inicio, final }, index) => {
            let colorUsado = colores[index % 4];
            let colorUsadoBorde = coloresBorde[index % 4];
            if (inicio === final) {
              return (
                <Stack
                  key={index}
                  align="center"
                  minWidth="250px"
                  padding="50px"
                >
                  <Box background={ colorUsado } borderWidth="5px" borderColor={ colorUsadoBorde } borderRadius="10px" padding="0.5em">
                    {informacion}
                  </Box>
                  <Box background={ colorUsado } borderWidth="5px" borderColor={ colorUsadoBorde } borderRadius="10px" padding="0.5em">
                    {format(new Date(inicio), "d MMMM", { locale: es })}
                  </Box>
                </Stack>
              );
            }
            return (
              <Stack
                key={index}
                align="center"
                minWidth="250px"
                paddingX="30px"
              >
                <Box background={ colorUsado } borderWidth="5px" borderColor={ colorUsadoBorde } borderRadius="10px" padding="0.5em">
                  {informacion}
                </Box>
                <Box
                  background={ colorUsado }
                  borderWidth="5px"
                  borderColor={ colorUsadoBorde }
                  textAlign="center"
                  borderRadius="10px"
                  padding="0.5em"
                >
                  {format(new Date(inicio), "d MMMM", { locale: es })} -{" "}
                  {format(new Date(final), "d MMMM", { locale: es })}
                </Box>
              </Stack>
            );
          })}
        </HStack>
      </Box>
    </ScrollContainer>
  );
};
