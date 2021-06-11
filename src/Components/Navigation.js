import { useState } from "react";
import { Stack, Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
const allMonths = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export function CircularNavigation() {
  const { push } = useRouter();

  return (
    <Stack alignItems="center" justifyContent="center">
      <Box className="toggle" id="toggle">
        <i>"PRIMER SEMESTRE"</i>

        <Button
          position="absolute"
          onClick={() => {
            push("/mes/enero");
          }}
          top="-20px"
        >
          Enero
        </Button>
        <Button
          position="absolute"
          onClick={() => {
            push("/mes/febrero");
          }}
          top="-20px"
          right="-40px"
        >
          Febrero
        </Button>
        <Button
          position="absolute"
          onClick={() => {
            push("/mes/marzo");
          }}
          top="40px"
          right="-40px"
        >
          Marzo
        </Button>
        <Button
          position="absolute"
          onClick={() => {
            push("/mes/abril");
          }}
          top="100px"
          right="-40px"
        >
          Abril
        </Button>
        <Button
          position="absolute"
          onClick={() => {
            push("/mes/mayo");
          }}
          top="160px"
          right="-40px"
        >
          Mayo
        </Button>
        <Button
          position="absolute"
          onClick={() => {
            push("/mes/junio");
          }}
          top="220px"
          right="-40px"
        >
          Junio
        </Button>
        <Button
          position="absolute"
          onClick={() => {
            push("/mes/julio");
          }}
          top="220px"
        >
          Julio
        </Button>
      </Box>
    </Stack>
  );
}
