import React from "react";

import { Formik } from "formik";
import * as yup from "yup";

import emailjs from "emailjs-com";
import { init } from "emailjs-com";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

const schema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string().email().required(),
  phone: yup.string(),
  description: yup.string().required(),
});

init(process.env.REACT_APP_EMAILJS_USER_ID);

const ContactForm = () => {
  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const sendEmailResult = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      console.log(sendEmailResult.text);
    } catch (error) {
      console.log(error.text);
    }
  };

  return (
    <div>
      <h3>Nous contacter</h3>
      <Formik
        initialValues={{
          lastname: "",
          firstname: "",
          email: "",
          phone: "",
          description: "",
        }}
        validationSchema={schema}
        // onSubmit={() => console.log("ok")}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          /* and other goodies */
        }) => (
          <Form
            onSubmit={async (e) => {
              e.preventDefault();
              if (!errors.email) {
                await sendEmail(e);
              }
              return;
            }}
          >
            <Form.Row>
              <Form.Group as={Col} style={{ marginRight: "20px" }}>
                <Form.Label>Nom</Form.Label>
                <Form.Control
                  type="text"
                  name="lastname"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                  type="text"
                  name="firstname"
                  value={values.firstname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} style={{ marginRight: "20px" }}>
                <Form.Label>
                  Email<span style={{ color: "red" }}>*</span>
                </Form.Label>
                <Form.Control
                  type="text"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isValid={touched.email && !errors.email}
                  isInvalid={touched.email && !!errors.email}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  L'email doit être valide
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Téléphone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label style={{ display: "flex", flexDirection: "column" }}>
                <div>
                  Votre message<span style={{ color: "red" }}>*</span>
                </div>
              </Form.Label>
              <textarea
                name="description"
                value={values.description}
                style={{
                  padding: ".375rem .75rem",
                  width: "100%",
                  minHeight: "200px",
                  color: "#495057",
                  backgroundColor: "#fff",
                  backgroundClip: "padding-box",
                  border: "1px solid #ced4da",
                  borderRadius: ".25rem",
                  transition:
                    "border-color .15s ease-in-out,box-shadow .15s ease-in-out",
                }}
                onChange={handleChange}
                onBlur={handleBlur}
                required
              />
            </Form.Group>
            <Form.Text>(*) Champs requis</Form.Text>
            <Button type="submit">Envoyer</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
