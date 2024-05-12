import React from "react";
import { Context } from "../store/appContext";
import { useNavigate } from 'react-router-dom';

const ContactCard = ({ contact }) => {
  const { store, actions } = React.useContext(Context);
  const history = useNavigate();

  const handleUpdate = () => {
    // Redirigir a la página de actualización y pasar los datos del contacto como parámetros de la URL
    history(`/updateContact/${contact.id}`, { contactData: contact });
  };

  const handleDelete = () => {
    actions.deleteContact(contact.id);
  };

  return (
    <div className="container text-center">
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{contact.name}</h5>
        <p className="card-text">Teléfono: {contact.phone}</p>
        <p className="card-text">Correo electrónico: {contact.email}</p>
        <p className="card-text">Dirección: {contact.address}</p>
        <div className="btn-group" role="group">
            <button className="btn y" onClick={handleUpdate}>
            <i className="fas fa-pencil-alt"></i>
            </button>
            <button className="btn" onClick={handleDelete}>
            <i className="fas fa-trash-alt"></i>
            </button>            
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactCard;