import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { Edit, Delete } from "../images";

const columns = [
  "First Name",
  "Last Name",
  "NPI Number",
  "Business Address",
  "Telephone Number",
  "Email",
  "Actions"
];

const Home = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();
  useEffect(() => {
    axios.get(`http://localhost:3000/users`).then(response => {
      setUsers(response.data);
    });
  }, []);

  const deleteCustomer = id => {
    axios.delete(`http://localhost:3000/users/${id}`).then(data => {
      const index = users.findIndex(customer => customer.id === id);
      let cust = [...users];
      cust.splice(index, 1);
      setUsers(cust);
      history.push("/");
    });
  };

  return (
    <div>
      <h1> User Management System </h1>
      <div className="container">
        <br />
        <button
          className="btn btn-success"
          onClick={() => {
            history.push("/create");
          }}
        >
          + Add User
        </button>
        <div className="row">
          <table className="table table-bordered">
            <thead className="thead-light">
              <tr>
                {columns.map(item => (
                  <th key={`${item} col`} scope="col">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map(customer => (
                  <tr key={customer.id}>
                    <td>{customer.firstName}</td>
                    <td>{customer.lastName}</td>
                    <td>{customer.npiNumber}</td>
                    <td>{customer.address}</td>
                    <td>{customer.phone}</td>
                    <td>{customer.email}</td>
                    <td>
                      <div className="d-flex justify-content-between align-items-center">
                        <Link
                          to={`edit/${customer.id}`}
                          className="btn btn-sm btn-outline-secondary"
                        >
                          <img height={20} width={20} src={Edit} alt="Edit" />{" "}
                        </Link>
                        <button
                          className="btn btn-sm btn-outline-secondary"
                          onClick={() => deleteCustomer(customer.id)}
                        >
                          <img
                            height={20}
                            width={20}
                            src={Delete}
                            alt="Delete"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>

        {users.length === 0 && (
          <div style={{ marginTop: 50, marginRight: 0, width: "100%" }}>
            {users.length === 0 && (
              <div className="text-center" style={{ marginBottom: 40 }}>
                <h2 style={{ opacity: 0.6 }}>No Records Found ...</h2>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
