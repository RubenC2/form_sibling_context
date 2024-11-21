import React, { useState } from 'react';

const Formulario = ({ onSubmitForm }) => {
  // const [inputValue, setInputValue] = useState('');

  //Estado del formulario
  const [formValues, setValues] = useState({
    name: '',
    email: '',
    img_url: '',
    age: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...formValues,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmitForm(formValues); // Pasamos el mensaje al componente hermano Card, a través de la función setMessage
  };

  return (
    <>
      Formulario
      <form className="data" onSubmit={handleSubmit}>

        <label htmlFor="name">Nombre</label><br />
        <input type="text" name="name" value={formValues.name} onChange={handleChange} /><br />

        <label htmlFor="email">Email</label><br />
        <input type="text" name="email" value={formValues.email} onChange={handleChange} /><br />

        <label htmlFor="img_url">URL foto</label><br />
        <input type="url" name="img_url" value={formValues.img_url} onChange={handleChange} /><br />

        <label htmlFor="age">Edad</label><br />
        <input type="number" name="age" value={formValues.age} onChange={handleChange} /><br />
        <div className='botonera'>
          {/* {values.name && values.email && values.img_url && values.age > 0 ?  */}
          <button type="submit">Enviar mensaje</button>
          {/* :<p>Rellena todos los campos</p>} */}
        </div>
      </form>
    </>
  );
};
export default Formulario;