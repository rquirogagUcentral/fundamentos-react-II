import React, { Component } from "react"

const Gato =(props) => (
  <div>
    <h1>Gato 🐈</h1>
    <pre>
      {JSON.stringify(props, null, 4)}
    </pre>
  </div>
)

class App extends Component
{
  state = {
    fuerza: 100,
    vidasRestantes: 7,
    name: 'Gatituu'
  }
  render(){
    const otrosDatos = {
      raza: 'Tropical',
      comidasDiarias: 3
    }
    return (
      <div>
        <Gato 
          name='Gardfield'
          age= '2 años'
          //Objeto OtrosDatos anidado en el JSON.stringify
          //otrosDatos={otrosDatos}
          /*RESULTADO
          {
            "name": "Gardfield",
            "age": "2 años"
          }
           */
          //Obteniendo datos en el mismo nivel , 
          //opción llamando obj uno a uno 
          /*raza={otrosDatos.raza}
          comidasDiarias={otrosDatos.comidasDiarias}
          RESULTADO
          {
            "name": "Gardfield",
            "age": "2 años",
            "raza": "Tropical",
            "comidasDiarias": 3
          }
          */
          //Obtener datos de OtrosDatos con la propiedad spread
          { ...otrosDatos }
          /*
            RESULTADO
            "name": "Gardfield",
            "age": "2 años",
            "raza": "Tropical",
            "comidasDiarias": 3
          }
           */
          { ...this.state}
        />
      </div>
    )
  }
}


export default App;
