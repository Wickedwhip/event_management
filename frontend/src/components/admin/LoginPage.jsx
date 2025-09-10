import React from "react";
import "./LoginPage.css";

const LoginPage = ({ onLogin }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value.trim();
    const password = e.target.password.value.trim();

    if (!username || !password) {
      alert("Enter credentials");
      return;
    }
    onLogin(); // fake login
  };

  return (
    <div className="login-wrapper">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2 className="login-title">⚡ Admin Login</h2>
        <input
          name="username"
          type="text"
          placeholder="Username"
          className="login-input"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="login-input"
        />
        <button type="submit" className="login-btn">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;



// import React from "react";

// const LoginPage = ({ onLogin }) => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // fake login: accept any non-empty
//     const username = e.target.username.value.trim();
//     const password = e.target.password.value.trim();
//     if (!username || !password) {
//       alert("Enter credentials");
//       return;
//     }
//     onLogin();
//   };

//   return (
//     <div style={{ display:"flex", alignItems:"center", justifyContent:"center", height:"100vh", background:"#08080b" }}>
//       <form onSubmit={handleSubmit} style={{ width:360, padding:24, background:"rgba(255,255,255,0.03)", borderRadius:12 }}>
//         <h2 style={{ color:"#fff", marginBottom:12 }}>Admin Login</h2>
//         <input name="username" placeholder="Username" style={inputStyle} />
//         <input name="password" type="password" placeholder="Password" style={inputStyle} />
//         <button type="submit" style={btnStyle}>Sign In</button>
//       </form>
//     </div>
//   );
// };

// const inputStyle = { width:"100%", padding:10, marginBottom:10, borderRadius:8, border:"1px solid rgba(255,255,255,0.06)", background:"transparent", color:"#fff" };
// const btnStyle = { width:"100%", padding:10, borderRadius:8, background:"#00f5ff", border:"none", color:"#041014", fontWeight:700 };

// export default LoginPage;
