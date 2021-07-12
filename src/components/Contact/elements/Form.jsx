import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    phone: "",
    description: "",
  });

  const labelStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        // alignItems: "center",
      }}
    >
      <h3>Nous contacter</h3>
      <label htmlFor="lastname" style={labelStyle}>
        Nom
        <input
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="firstname" style={labelStyle}>
        Prénom
        <input
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email" style={labelStyle}>
        Email
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="phone" style={labelStyle}>
        Téléphone
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="description" style={labelStyle}>
        Votre message
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          style={{ width: "500px", height: "200px", resize: "none" }}
        />
      </label>
    </form>
  );
};

export default Form;
