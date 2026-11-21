import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const login = () => {
    navigate("/allusers");
  };

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="Apna naam likho" />
      <br /><br />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;


// import { useState } from "react";

// function Login() {

//     var [email, SetEmail] = useState("")
//     var [pass, SetPass] = useState("")

//     var show = (e) => {
//         e.preventDefault();
//         alert("Login Successful");
//     }

//     const bg = {
//         height: "100vh",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         background: "blue"
//     };
//     const box = {
//         background: "white",
//         padding: "30px",
//         borderRadius: "15px",
//         width: "350px",
//         textAlign: "center"
//     };
//     const input = {
//         width: "100%",
//         padding: "10px",
//         borderRadius: "8px",
//         border: "1px solid #ccc"
//     };
//     const btn = {
//         width: "100%",
//         padding: "12px",
//         marginTop: "20px",
//         border: "none",
//         borderRadius: "8px",
//         background: "linear-gradient(to right,#3b82f6,#6366f1)",
//         color: "white",
//         fontSize: "16px"
//     };

//     return (
//         <div style={bg}>
//             <div style={box}>
//                 <h1>Login Form</h1>
//                 <form onSubmit={show}>
//                     <p>Email:</p>
//                     <input
//                         required
//                         onChange={(e) => SetEmail(e.target.value)} style={input} placeholder="Enter your email" />
//                     <p>Password:</p>
//                     <input
//                         required
//                         onChange={(p) => SetPass(p.target.value)} style={input} type="password" placeholder="Enter your password" />
//                     <button type="submit" style={btn}>Login</button>
//                 </form>
//             </div>
//         </div>
//     )
// }          
// export default Login;