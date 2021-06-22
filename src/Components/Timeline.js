import { useState } from "react";
import { Stack, Button, Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import DataEjemplo from "../data/ejemplo.json";

export const Timeline = ({ mes }) => {
  DataEjemplo.Hello;
  return (
    <Stack isInline>
      <Button>22 Marzo</Button>
      <Box> {JSON.stringify(DataEjemplo)}</Box>
    </Stack>
  );
};
