import React from 'react';

const Form = () => (
  <div className="Form">
    <div className="Form-head">
      <h2>Dar en adopcion</h2>
    </div>
    <div className="Form-item">
      <form action="">
        <input type="text" name="name" placeholder="Nombre de tu mascota"/>
        <input type="text" name="description" placeholder="Descripcion"/>
        <select name="type">
          <option disabled defaultValue>Seleccionar</option>
          <option value="cat">Gato</option>
          <option value="dog">Perro</option>
        </select>
        <select name="gender">
          <option disabled defaultValue>Seleccionar</option>
          <option value="famele">Femenino</option>
          <option value="male">Masculino</option>
        </select>
        <select name="adopt">
          <option disabled defaultValue>Seleccionar</option>
          <option value="true">Dar en adopcion</option>
          <option value="false">Cuidar</option>
        </select>
        <input type="file" name="photo" />
        <button>Enviar</button>
      </form>
    </div>
  </div>
);

export default Form;