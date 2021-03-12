import useForm from "../UseForm";
import Form from "./Form";
import { withRouter, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

const Create = () => {
  const {
    handleChange,
    handleSubmit,
    registrationObj,
    values,
    loading,
    submitSuccess,
    setValues
  } = useForm();
  const { id } = useParams();

  useEffect(() => {
    if (id)
      // axios.get(`http://localhost:3000/users/${id}`).then(data => {
        setValues({
          "firstName": "SANJU",
          "lastName": "DEVI",
          "address": "DALDALI ROAD",
          "phone": "07337525628",
          "email": "ASHISHANAND963@GMAIL.COM",
          "id": 1
        });
      // });
      else setValues({});
  },[id]);

  return (
    <>
      <Form
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        registrationObj={registrationObj}
        values={values}
        loading={loading}
        submitSuccess={submitSuccess}
      />
    </>
  );
};

export default withRouter(Create);
