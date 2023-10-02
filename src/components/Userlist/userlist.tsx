import { useEffect, useState } from "react";

// const users = [
//   {
//     id: 1,
//     name: "Ram",
//   },
//   {
//     id: 2,
//     name: "Shyam",
//   },
// ];

export function UserList() {
  /**
   * There is a bug in  this component.
   * All the input boxes have the same value.
   *
   * HINT: make component for input which contains the state `name`
   *
   * !FIX: Try to fix the bug
   */
  const [name, setName] = useState();

  const [users, setUsers] = useState<
    {
      id: number;
      name: string;
      username: string;
      phone: string;
      website: string;
      // TODO: give actual type from https://jsonplaceholder.typicode.com/users
      address: any;
      // TODO: give actual type from https://jsonplaceholder.typicode.com/users
      company: any;
    }[]
  >([]);

  function handleChange(e) {
    const value = e.currentTarget.value;
    setName(value);
  }

  useEffect(() => {
    // runs when mount on ui
    console.log("mounted on the ui");
    // https://jsonplaceholder.typicode.com/users
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data from api", data);
        setUsers(data);
      });

    return () => {
      // runs when component is unmounted
      console.log("unmounted from the ui");
    };
  }, []);

  return (
    <div>
      <h2>List of users</h2>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.id}>
              <p>{user.name}</p>
              <input name="user_name" value={name} onChange={handleChange} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
