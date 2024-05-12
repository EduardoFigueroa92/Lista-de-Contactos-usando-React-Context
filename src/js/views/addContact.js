import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const AddContact = () => {
  const { actions } = useContext(Context);
  const history = useNavigate();
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    address: ""
  });

  const handleChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    console.log("handleSubmit");
    e.preventDefault();
    actions.addContact(contact);
    history ("/");
  };

  return (
    <div className="container">
      <h1>Añadir Nuevo Contacto</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={contact.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Teléfono:</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">E-mail:</label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Dirección:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={contact.address}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Añadir Contacto
        </button>

      </form>
    </div>
  );
};

export default AddContact;