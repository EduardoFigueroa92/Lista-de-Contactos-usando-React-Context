
const getState = ({ getStore, getActions, setStore }) => {
	
	return {
		store: {			
			contacts: []
		},
		actions: {
			loadContacts: async () => {
				try {
					const response = await fetch('https://playground.4geeks.com/contact/agendas/edu/contacts');
					const data = await response.json();
					const contactsArray = data.contacts;
					console.log(contactsArray);
					if (Array.isArray(contactsArray)) {
						setStore({ contacts: contactsArray });
					  } else {
						console.error('Data retrieved from API is not an array:', data);
					  }
				} catch (error) {
				  	console.error('Error fetching contacts:', error);
				}
			  },
			
			  updateContact: async (updatedContactData) => {
				try {
				  // Lógica para actualizar el contacto con los datos modificados
				  const response = await fetch(`https://playground.4geeks.com/contact/agendas/edu/contacts/${updatedContactData.id}`, {
					method: "PUT",
					headers: {
					  "Content-Type": "application/json"
					},
					body: JSON.stringify(updatedContactData)
				  });
				  console.log("Contacto actualizado:", updatedContactData);
				  
				} catch (error) {
				  console.error("Error actualizando contacto:", error);
				}
			  },
			  deleteContact: async (id) => {
				try {
				  // Lógica para eliminar el contacto con el ID especificado
				  const response = await fetch(`https://playground.4geeks.com/contact/agendas/edu/contacts/${id}`, {
					method: "DELETE"
				  });
				  console.log("Contacto eliminado:", id);
				  window.location.reload();
				} catch (error) {
				  console.error("Error eliminando contacto:", error);
				}
			  },
			  addContact: async (newContactData, history) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/contact/agendas/edu/contacts`, {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(newContactData)
					});
					if (!response.ok) {
						throw new Error('Error al agregar contacto');
					}
					const data = await response.json();
					setStore(prevStore => ({
						...prevStore,
						contacts: [...prevStore.contacts, data]
					}));
					console.log('Contacto añadido:', data);
					history(`/`);
				} catch (error) {
					console.error('Error añadiendo contacto:', error);
				}
			}
		}
	};
};

export default getState;