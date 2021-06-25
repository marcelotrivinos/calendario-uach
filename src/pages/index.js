import { Stack, Heading, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
export default function IndexPage() {
  const router = useRouter();
  return (
    <Stack
      backgroundColor="rgb(254,214,70)"
      backgroundRepeat="repeat-x"
      backgroundImage="url(/logo1nuevo.png)"
      backgroundSize="110px"
      backgroundPosition="bottom"
      width="100vw"
      height="100vh"
      alignItems="center"
      justifyContent="space-around"
    >
      <Stack
        backgroundImage="url(/logoletrasprincipal.png)"
        backgroundSize="210px"
        alignItems="center"
      >
        <Heading fontSize="3em">Calendario Acádemico UACh</Heading>
        <Heading border="2px dashed black" padding="0.5em" borderRadius="10px">
          ¿Qué deseas visualizar?
        </Heading>
      </Stack>
      <Stack isInline>
        <Button
          onClick={() => {
            router.push("/hoy");
          }}
        >
          Hoy
        </Button>
      </Stack>
      <Stack isInline>
        <Button
          onClick={() => {
            router.push("/primer_semestre");
          }}
        >
          1º Semestre
        </Button>
      </Stack>
      <Stack isInline>
        <Button
          onClick={() => {
            router.push("/segundo_semestre");
          }}
        >
          2º Semestre
        </Button>
      </Stack>
    </Stack>
  );
}
