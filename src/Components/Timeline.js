import { useState } from "react";
import { Stack, Button, Box } from "@chakra-ui/react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export const Timeline = ({ mes, data }) => {
  return (
    <Stack isInline>
      {data.map(({ informacion, inicio, final }, index) => {
        if (inicio === final) {
          return (
            <Box key={index}>
              <Button>{inicio}</Button>
            </Box>
          );
        }
        return (
          <Stack key={index} align="center">
            <Box>{informacion}</Box>
            <Box background="white" borderRadius="10px" padding="0.5em">
              {format(new Date(inicio), "d MMMM", { locale: es })} -
              {format(new Date(final), "d MMMM", { locale: es })}
            </Box>
          </Stack>
        );
      })}
    </Stack>
  );
};
