import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const useForm = () => {
  const [values, setValues] = useState([]);
  const [registrationObj, setRegistrationObj] = useState();
  const [loading, setLoading] = useState(false);
  const [submitSuccess, setsubmitSuccess] = useState(false);
  const history = useHistory();

  const handleChange = e => {
    let reg = { ...registrationObj };
    reg[e.currentTarget.name] = e.currentTarget.value;
    setRegistrationObj(reg);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setsubmitSuccess(true);
    setValues([...values, { ...registrationObj, id: values.length }]);

    axios
      .post(`http://localhost:3000/users`, {
        ...registrationObj,
        id: values.length
      })
      .then(data => [
        setTimeout(() => {
          setLoading(false);
          history.push("/");
        }, 500)
      ]);
  };

  return {
    handleChange,
    handleSubmit,
    registrationObj,
    values,
    loading,
    submitSuccess,
    setValues,
    setRegistrationObj
  };
};

export default useForm;
