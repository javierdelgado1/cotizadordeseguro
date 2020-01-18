import React, {useState} from 'react';
import Header from './components/Header';

import Formulario from './components/Formulario';
import Resumen from './components/Resumen';
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

import styled from '@emotion/styled';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;
const ContenedorFormulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`
function App() {
  const [resumen, guardarResumen] = useState({
    cotizacion : 0,
    datos:{
      marca :'',
      year:'',
      plan:''
    }
  });
  const [ cargando, guardarCargando] = useState(false);
  const {datos} =resumen;
  return (
    <Contenedor>
        <Header
          titulo ='Cotizador de seguros'>

        </Header>

        <ContenedorFormulario>
          <Formulario
            guardarResumen={guardarResumen}
            guardarCargando={guardarCargando}
          ></Formulario>

          <Resumen
            datos ={datos}
            >

          </Resumen>
        </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
