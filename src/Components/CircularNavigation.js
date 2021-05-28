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
  //constructor(props) {
  //  super(props);
  // this.state = {
  //months: [ "Enero", "Febrero", "Marzo", "Abril",
  //  "Mayo", "Junio", "Julio", "Agosto",
  //"Septiembre", "Octubre", "Noviembre",
  //"Diciembre"],
  //};
  // }

  // months = ["Enero", "Febrero", "Marzo", "Abril",
  //   "Mayo", "Junio", "Julio", "Agosto",
  // "Septiembre", "Octubre", "Noviembre",
  //"Diciembre"];

  /*
    render = () =>  
    
        <div className="container">
            <div id="circle">PRIMER SEMESTRE</div>
        </div>
        //<div>PRIMER SEMESTRE</div>
    */
  /*
     listMonths = this.months.map((month, index) =>
                <ol><li key={ index }>{month}</li></ol>)
     );*/

  //history = useHistory();
  const clickCalendario = (i) => {
    switch (i) {
      case 1: //history.push({to: '/Info'}); break;
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
    }
  };

  const { push } = useRouter();

  return (
    <Stack alignItems="center" justifyContent="center">
      <Box className="toggle" id="toggle">
        <i>"PRIMER SEMESTRE"</i>

        <Button
          position="absolute"
          onClick={() => {
            push("/enero");
          }}
          top="-20px"
        >
          Enero
        </Button>
        <Button
          position="absolute"
          onClick={() => {
            push("/febrero");
          }}
          top="-20px"
          right="-40px"
        >
          Febrero
        </Button>
        <Button
          position="absolute"
          onClick={() => {
            push("/marzo");
          }}
        >
          Marzo
        </Button>
        <Button
          position="absolute"
          onClick={() => {
            push("/abril");
          }}
        >
          Abril
        </Button>
        <Button
          position="absolute"
          onClick={() => {
            push("/mayo");
          }}
        >
          Mayo
        </Button>
        <Button
          position="absolute"
          onClick={() => {
            push("/junio");
          }}
        >
          Junio
        </Button>
      </Box>
    </Stack>
  );
}
