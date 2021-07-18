import React, { useEffect, useState, memo } from "react";

import { db } from "../../../firebase";

import { Formik } from "formik";
import * as yup from "yup";

import { useSelector } from "react-redux";

import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { useAuth } from "../../../hooks";
import { reader } from "../../../utils/roles";

const schema = yup.object().shape({
  firstName: yup.string(),
  lastName: yup.string(),
  email: yup.string().email().required(),
  phone: yup.string(),
});

const CustomerSignUp = memo(() => {
  const { authStatus } = useSelector((state) => state);
  const { userData } = useAuth();
  const [initialValues, setInitialValues] = useState({
    lastname: "",
    firstname: "",
    email: "",
    phone: "",
  });

  const handleSubmit = async (values) => {
    if (authStatus.isSignedIn) {
      try {
        await db()
          .collection("users")
          .doc(userData.uid)
          .set({
            ...values,
            status: "pending",
            role: reader,
          });
      } catch (error) {
        console.log(error);
      }
    }
    return;
  };

  useEffect(() => {
    userData &&
      setInitialValues((prevState) => ({
        ...prevState,
        email: userData.email,
      }));
  }, [userData]);

  return (
    <>
      {authStatus.isSignedIn && (
        <div>
          <h3>Étape 2: Inscrivez-vous</h3>
          {initialValues.email.length > 0 && (
            <Formik initialValues={initialValues} validationSchema={schema}>
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
                      handleSubmit(values);
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
                        readOnly
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

                  <Form.Text>(*) Champs requis</Form.Text>
                  <Button type="submit">Inscription</Button>
                </Form>
              )}
            </Formik>
          )}
        </div>
      )}
    </>
  );
});

export default CustomerSignUp;
