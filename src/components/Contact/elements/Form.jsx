import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    phone: "",
    description: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  return (
    <form>
      <label htmlFor="lastname">
        Nom :
        <inupt
          type="text"
          name="lastname"
          value={formData.lastname}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="firstname">
        Prénom :
        <inupt
          type="text"
          name="firstname"
          value={formData.firstname}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="email">
        Email :
        <inupt
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="phone">
        Téléphone :
        <inupt
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="description">
        Votre message :
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
      </label>
    </form>
  );
};

export default Form;
