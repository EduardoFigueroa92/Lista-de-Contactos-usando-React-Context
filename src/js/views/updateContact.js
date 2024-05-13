import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { Context } from "../store/appContext";


const UpdateContact = () => {
  let { id } = useParams();
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState({});
  const [loading, setLoading] = useState(true); // Nuevo estado para indicar si se está cargando el contacto


  useEffect(() => {
    // Obtener los detalles del contacto con el ID especificado
    const fetchedContact = store.contacts.find(item => item.id === parseInt(id));
    setContact(fetchedContact);
    setLoading(false); // Ya se ha cargado el contacto, por lo que establecemos loading en false
  }, []);

  const handleUpdate = () => {
    // Lógica para actualizar el contacto con los datos modificados
    actions.updateContact(contact);
  };

  const handleChange = e => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  if (loading) {
    return <div>Cargando...</div>; // Muestra un mensaje de carga mientras se espera a que se cargue el contacto
  }

  return (
    <div className="container contenedorformulario">

      <form>
        <h1>Actualizar contacto</h1>
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={contact.name}
            onChange={handleChange}
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
          />
        </div>
        <Link to="/">
          <button type="button" className="btn1" onClick={handleUpdate}>
            Actualizar
          </button>
        </Link>
      </form>
    </div>
  );
};

export default UpdateContact;