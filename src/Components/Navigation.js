import { Stack, Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";

export function CircularNavigation() {
  const { push } = useRouter();

  return (
    <Stack alignItems="center" justifyContent="center">
      <Box className="toggle" id="toggle">
        <i>PRIMER SEMESTRE</i>

        <Button
          background="green.300"
          borderWidth="5px"
          borderColor="green.500"
          position="absolute"
          onClick={() => {
            push("/mes/enero");
          }}
          top="-42px"
        >
          Enero
        </Button>
        <Button
          background="green.300"
          borderWidth="5px"
          borderColor="green.500"
          position="absolute"
          onClick={() => {
            push("/mes/febrero");
          }}
          top="10px"
          right="-85px"
        >
          Febrero
        </Button>
        <Button
          background="green.300"
          borderWidth="5px"
          borderColor="green.500"
          position="absolute"
          onClick={() => {
            push("/mes/marzo");
          }}
          top="102px"
          right="-90px"
        >
          Marzo
        </Button>
        <Button
          background="green.300"
          borderWidth="5px"
          borderColor="green.500"
          position="absolute"
          onClick={() => {
            push("/mes/abril");
          }}
          top="185px"
          right="-30px"
        >
          Abril
        </Button>
        <Button
          background="green.300"
          borderWidth="5px"
          borderColor="green.500"
          position="absolute"
          onClick={() => {
            push("/mes/mayo");
          }}
          top="185px"
          right="150px"
        >
          Mayo
        </Button>
        <Button
          background="green.300"
          borderWidth="5px"
          borderColor="green.500"
          position="absolute"
          onClick={() => {
            push("/mes/junio");
          }}
          top="102px"
          right="200px"
        >
          Junio
        </Button>
        <Button
          background="green.300"
          borderWidth="5px"
          borderColor="green.500"
          position="absolute"
          onClick={() => {
            push("/mes/julio");
          }}
          top="10px"
          right="185px"
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
        <i>SEGUNDO SEMESTRE</i>

        <Button
          background="green.300"
          borderWidth="5px"
          borderColor="green.500"
          position="absolute"
          onClick={() => {
            push("/mes/agosto");
          }}
          top="-42px"
        >
          Agosto
        </Button>
        <Button
          background="green.300"
          borderWidth="5px"
          borderColor="green.500"
          position="absolute"
          onClick={() => {
            push("/mes/septiembre");
          }}
          top="20px"
          right="-120px"
        >
          Septiembre
        </Button>
        <Button
          background="green.300"
          borderWidth="5px"
          borderColor="green.500"
          position="absolute"
          onClick={() => {
            push("/mes/octubre");
          }}
          top="130px"
          right="-100px"
        >
          Octubre
        </Button>
        <Button
          background="green.300"
          borderWidth="5px"
          borderColor="green.500"
          position="absolute"
          onClick={() => {
            push("/mes/noviembre");
          }}
          top="202px"
        >
          Noviembre
        </Button>
        <Button
          background="green.300"
          borderWidth="5px"
          borderColor="green.500"
          position="absolute"
          onClick={() => {
            push("/mes/diciembre");
          }}
          top="130px"
          right="195"
        >
          Diciembre
        </Button>
        <Button
          background="green.300"
          borderWidth="5px"
          borderColor="green.500"
          position="absolute"
          onClick={() => {
            push("/mes/enero2022");
          }}
          top="20px"
          right="190px"
        >
          Enero 2022
        </Button>
      </Box>
    </Stack>
  );
}
