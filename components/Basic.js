import React from "react";
import { Formik } from "formik";

import axios from "axios";

const Basic = () => (
  <div>
    <Formik
      initialValues={{
        authenticity_token:
          "99sg7E9RLtOiQeu6ZzYOGaDH+TqBpFMrzCxy3AwGu1XmAnd+4gOMvad/OAc0QE+8QoUWvdeKLamgLeEsA7wd8Q==",
        email: "",
        contact: { first_name: "" },
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        axios({
          method: "POST",
          url: "https://spark.re/urban-pace/seneca-house/register/registration-form",
          body: JSON.stringify(values, null, 2),
          withCredentials: false,
        })
          .then((response) => {
            console.log(response.data);
            router.replace("/thank-you");
          })
          .catch(function (error) {
            console.log(error);
            console.log(error.response.data);
          });

        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <input
            placeholder="email"
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <input
            placeholder="Firstname"
            type="text"
            name="contact[first_name]"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <input
            placeholder="Last Name"
            type="text"
            name="contact[last_name]"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default Basic;
