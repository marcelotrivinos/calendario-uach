import '../Styles/Styles.css';
import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';

export class CircularNavigation extends Component {
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
    clickCalendario = (i) => {    
        switch(i) {
            case(1): //history.push({to: '/Info'}); break;
            case(2): 
            case(3): 
            case(4): 
            case(5): 
            case(6): 
        }
    };

    render = () =>
        <body>

            <div class="toggle" id="toggle">
                <i>"PRIMER SEMESTRE"</i>
            </div>

            <div class="menu" id="menu">
                <button onClick={()=>this.clickCalendario(1)}> Enero </button>
                <button onClick={()=>this.clickCalendario(2)}>Febrero</button>
                <button onClick={()=>this.clickCalendario(3)}> Marzo </button>
                <button onClick={()=>this.clickCalendario(4)}> Abril</button>
                <button onClick={()=>this.clickCalendario(5)}> Mayo </button>
                <button onClick={()=>this.clickCalendario(6)}> Junio</button>
                

            </div>
        </body>
        //<li> {months[5]}</li>
}