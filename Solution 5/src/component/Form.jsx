import { useHistory } from "react-router-dom";

const fields = [
  {
    name: "firstName",
    type: "text",
    label: "First Name",
    placeholder: "Enter first name"
  },
  {
    name: "lastName",
    type: "text",
    label: "Last Name",
    placeholder: "Enter last name"
  },
  {
    name: "npiNumber",
    type: "number",
    label: "NPI Number",
    placeholder: "Enter NPI number"
  },
  {
    name: "address",
    type: "text",
    label: "Address",
    placeholder: "Enter address"
  },
  {
    name: "phone",
    type: "text",
    label: "Phone",
    placeholder: "Enter phone number"
  },
  {
    name: "email",
    type: "email",
    label: "Email",
    placeholder: "Enter email address",
    pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
  }
];
const Form = ({
  handleChange,
  handleSubmit,
  values,
  loading,
  submitSuccess
}) => {
  const history = useHistory();
  return (
    <div>
      <div className="form-group col-md-4">
        <button
          className="btn btn-success"
          type="submit"
          onClick={() => history.push("/")}
        >
          Go Back
        </button>
      </div>
      <div className={"col-md-12 form-wrapper"}>
        <h2>{ !values.id ? "New User" : "Edit User" }</h2>
        {!submitSuccess && (
          <div className="alert alert-info" role="alert">
            Fill the form below to Register
          </div>
        )}
        {submitSuccess && (
          <div className="alert alert-info" role="alert">
            Successfully Registered!
          </div>
        )}
        <div>
          {fields.map(item => {
            return (
              <div
                key={`${item.name} ${item.type}`}
                className="form-group col-md-12"
              >
                <label htmlFor={item.name}> {item.label}</label>
                <input
                  type={item.type}
                  id={item.name}
                  onChange={e => handleChange(e)}
                  name={item.name}
                  className="form-control"
                  placeholder={item.placeholder}
                  defaultValue={values[item.name]}
                  pattern={item.pattern ? item.pattern : null}
                />
              </div>
            );
          })}

          <div className="form-group col-md-4">
            <button
              className="btn btn-success"
              type="submit"
              onClick={e => handleSubmit(e)}
            >
              Save Changes
            </button>
            {loading && <span className="fa fa-circle-o-notch fa-spin" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
