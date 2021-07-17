import React from "react";

import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object().shape({});

const Profile = () => {
  return (
    <div>
      <Formik
        initialValues={{
          lastname: "",
          firstname: "",
          email: "",
          phone: "",
        }}
        validationSchema={schema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          /* and other goodies */
        }) => <form></form>}
      </Formik>
    </div>
  );
};

export default Profile;
