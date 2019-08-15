import React from 'react';

const home = () => (
  <div className="Home">
    <div className="Home-container">
      <div className="Home-items">
        <div className="Pets">
          <div className="Pets-cover">
            <span>🐶</span>
            <div className="Pets-type">Adopcion</div>
          </div>
          <div className="Pets-content">
            <div className="Pets-head">
              <h2>nombre de la mascota</h2>
              <i>genero</i>
            </div>
            <div className="Pets-date">
              <i>icono</i>
              <span>fecha</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default home;