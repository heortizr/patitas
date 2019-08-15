import React from 'react';
import Form from '../components/Form';

const Dashboard = () => (
  <div className="Dashboard">
    <div className="Dashborad-container">
      <div className="Dashboard-content">
        <div className="Dashboard-form">
          <Form />
        </div>
        <div className="Dashboard-profile">
          <h2>Perfil</h2>
          <div className="Dashboard-profile-info">
            <img src="" alt="Nombre de usuario"/>
            <span>Nombre:</span>
            <h4>Hugo Ortiz</h4>
            <span>Correo:</span>
            <h4>hugo@mail.com</h4>
            <button>Cerrar la sesion</button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;