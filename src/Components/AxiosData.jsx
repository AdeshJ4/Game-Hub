import { useEffect, useState } from "react";
// import apiClient, { CanceledError } from "./services/api-client";  // replace "axios" word with apiClient
import axios, { CanceledError } from "axios";

const AxiosData = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false); // true => show loader

  // Using .then .catch method
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/users")
  //     .then((res) => setUsers(res.data))
  //     .catch((err) => setError(err.message));
  // }, []);

  // using async await

  const fetchUser = async (controller) => {
    try {
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/users",
        { signal: controller.signal }
      );
      setUsers(res.data);
      setLoading(false); // don't show loader
    } catch (err) {
      if (err instanceof CanceledError) return;
      setError(err.message);
      setLoading(false); // don't show loader
    }
  };

  useEffect(() => {
    const controller = new AbortController(); // effect cleanup
    setLoading(true);
    fetchUser(controller);
    return () => controller.abort(); // effect cleanup
  }, []);

  const deleteUser = (user) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));
    axios
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id) // this also return promise but we are not going to do anything after promise is resolve.
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers); // if error occur.
      });
  };

  const addUser = () => {
    const originalUsers = [...users];
    // update UI first
    const newUser = { id: 0, name: "Adesh" }; // this is hardcore data. you have to take data from form.
    setUsers([...users, newUser]);
    // then made changes to server
    axios
      .post("https://jsonplaceholder.typicode.com/users", newUser)
      .then((res) => setUsers([...users, res.data]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user) => {
    const originalUser = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    axios
      .patch(
        "https://jsonplaceholder.typicode.com/users/" + user.id,
        updatedUser
      )
      .catch((err) => {
        setError(err.message);
        setUsers(originalUser);
      });
  };
  return (
    <>
      <h1>Axios Data Fetching</h1>

      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => {
          return (
            <li
              key={user.id}
              className="list-group-item d-flex justify-content-between"
            >
              {user.name}
              <div>
                <button
                  className="btn btn-outline-secondary mx-1"
                  onClick={() => updateUser(user)}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default AxiosData;
