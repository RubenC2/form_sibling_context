import React, { useState } from 'react';
import Card from './components/Main/Card';
import Formulario from './components/Main/Formulario';
import { EmailContext } from './context/EmailContext';
import Head from "./components/Main/Head";

const App = () => {
  // const [message, setMessage] = useState('');
  const [datosFormulario, setDatosFormulario] = useState({
    name: '',
    email: '',
    img_url: '',
    age: ''
});


  return (
    <div className='container'>
      <EmailContext.Provider value={datosFormulario.email}>
      <Head/>
      </EmailContext.Provider>
      <Formulario onSubmitForm={setDatosFormulario} />
      <Card message={datosFormulario} />
    </div>
  );
};

export default App;
