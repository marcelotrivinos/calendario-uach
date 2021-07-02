import { useState } from "react";
import { Stack, Button, Box, HStack } from "@chakra-ui/react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import ScrollContainer from "react-indiana-drag-scroll";

export const Timeline = ({ mes, data }) => {
  return (
    <ScrollContainer>
      <Box display="block" width="100vw">
        <HStack width="100%">
          {data.map(({ informacion, inicio, final }, index) => {
            if (inicio === final) {
              return (
                <Stack
                  key={index}
                  align="center"
                  minWidth="250px"
                  padding="50px"
                >
                  <Box background="white" borderRadius="10px" padding="0.5em">
                    {informacion}
                  </Box>
                  <Box background="white" borderRadius="10px" padding="0.5em">
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
                <Box background="white" borderRadius="10px" padding="0.5em">
                  {informacion}
                </Box>
                <Box
                  background="white"
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
