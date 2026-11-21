import { useNavigate } from "react-router-dom";

function AllUsers() {
  const navigate = useNavigate();
  const users = ["Ali", "Ahmed", "Sara"];

  return (
    <div>
      <h1>All Users</h1>
      {users.map((name) => (
        <button
          key={name}
          onClick={() => navigate("/sendmessage")}
          style={{ display: "block", margin: "10px" }}
        >
          {name}
        </button>
      ))}
    </div>
  );
}

export default AllUsers;

 
// function AllUsers() {
//   const users = ["Ali", "Ahmed", "Sara"];

//   return (
//     <div>
//       <h1>All Users</h1>
//       {users.map((name) => (
//         <p key={name}>{name}</p>
//       ))}
//     </div>
//   );
// }

// export default AllUsers;


// import { Link } from "react-router-dom";

// function AllUsers() {
//   const users = [
//     { name: "Ali" },
//     { name: "Umar" },
//     { name: "Ahmed" },
//   ];

//   return (
//     <div>
//       <h1>All Users</h1>
//       {users.map((u, i) => (
//         <Link key={i} to={`/chat/Ali/${u.name}`}>
//           <p>{u.name}</p>
//         </Link>
//       ))}
//     </div>
//   );
// }

// export default AllUsers;



// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function AllUsers() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/users")
//       .then(res => res.json())
//       .then(data => setUsers(data));
//   }, []);

//   return (
//     <div>
//       <h1>All Users</h1>

//       {users.map((u, i) => (
//         <Link key={i} to={`/chat/Ali/${u.name}`}>
//           <p>{u.name}</p>
//         </Link>
//       ))}
//     </div>
//   );
// }

// export default AllUsers;