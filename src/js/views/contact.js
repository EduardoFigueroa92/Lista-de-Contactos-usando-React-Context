import React, { useContext, useEffect } from 'react';
import { Context } from "../store/appContext";
import ContactCard from '../component/contactCard';

const Contact = () => {
  const { store, actions } = useContext(Context);
  const { contacts } = store;

  useEffect(() => {
    actions.loadContacts(); // Cargar los contactos al montar la vista
  }, []);

  return (
    <div className="text-center">
      <h1 className="inicio">AGENDA DE CONTACTOS</h1>
      {contacts.map(contact => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};
export default Contact;