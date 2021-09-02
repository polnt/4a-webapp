import React, { useState } from "react";

import { Redirect } from "react-router-dom";

import { Formik } from "formik";
import * as yup from "yup";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import mainBackground from "../../assets/img/BG_homepagev2.png";
import { LogoNoPolice } from "../../assets/svg/Logos";

const schema = yup.object().shape({
  password: yup.string().required(),
});

const Access = () => {
  const [redirect, setRedirect] = useState(false);

  return (
    <div
      className="container_page"
      style={{ height: "100vh", backgroundImage: `url(${mainBackground})` }}
    >
      <div
        className="content_page"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            borderRadius: "0.2em",
            boxShadow:
              "inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17), inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15), inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12)",
            padding: "20px 20px 20px 20px",
          }}
        >
          <LogoNoPolice />
          <Formik
            initialValues={{
              password: "",
            }}
            validationSchema={schema}
          >
            {({ values, errors, touched, handleChange, handleBlur }) => (
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  if (!errors.password) {
                    if (values.password === process.env.REACT_APP_SECRET) {
                      console.log(redirect);
                      sessionStorage.setItem("password", "ok");
                      setRedirect(true);
                    }
                  }
                  return;
                }}
              >
                <Form.Row>
                  <Form.Group>
                    <Form.Label>Mot de passe</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Form.Group>
                </Form.Row>

                <Button type="submit">Entrer</Button>
              </Form>
            )}
          </Formik>
        </div>

        {redirect && <Redirect to="/" />}
      </div>
    </div>
  );
};

export default Access;
