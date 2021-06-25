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
  "Enero 2022",
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

export function CircularNavigation2() {
  const { push } = useRouter();

  return (
    <Stack alignItems="center" justifyContent="center">
      <Box className="toggle" id="toggle">
        <i>"SEGUNDO SEMESTRE"</i>

        <Button
          position="absolute"
          onClick={() => {
            push("/mes/agosto");
          }}
          top="-20px"
        >
          Agosto
        </Button>
        <Button
          position="absolute"
          onClick={() => {
            push("/mes/septiembre");
          }}
          top="10px"
          right="-80px"
        >
          Septiembre
        </Button>
        <Button
          position="absolute"
          onClick={() => {
            push("/mes/octubre");
          }}
          top="60px"
          right="-80px"
        >
          Octubre
        </Button>
        <Button
          position="absolute"
          onClick={() => {
            push("/mes/noviembre");
          }}
          top="110px"
          right="-90px"
        >
          Noviembre
        </Button>
        <Button
          position="absolute"
          onClick={() => {
            push("/mes/diciembre");
          }}
          top="160px"
          right="-80px"
        >
          Diciembre
        </Button>
        <Button
          position="absolute"
          onClick={() => {
            push("/mes/enero2022");
          }}
          top="200px"
        >
          Enero 2022
        </Button>
      </Box>
    </Stack>
  );
}

export function Today() {
  const { push } = useRouter();
  return (
    <Stack alignItems="center" justifyContent="center">
      <Box className="toggle" id="toggle">
        <i>"Plazo más próximo a terminar o comenzar"</i>
        <Button
          position="absolute"
          onClick={() => {
            push("/mes/agosto"); //deberia llevarme al mes actual
          }}
          top="-20px"
        >
          ¡Click aquí para ir al mes!
        </Button>
      </Box>
    </Stack>
  );
}
