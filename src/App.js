import React from 'react';
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
  return (
    <Contenedor>
        <Header
          titulo ='Cotizador de seguros'>

        </Header>

        <ContenedorFormulario>
          
        </ContenedorFormulario>
    </Contenedor>
  );
}

export default App;
