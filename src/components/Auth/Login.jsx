import { useState } from "react";
import { getLocalStorage } from "../../utils/LocalStorage";

const Login = ({ handellogin }) => {
  // console.log(handellogin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SubmiteHandler = (e) => {
    e.preventDefault();
    handellogin(email, password);

    // console.log("password :", password);
    // console.log("email :", email);
    setEmail("");
    setPassword("");
  };

  const data = getLocalStorage();
  // console.log(data.employees)

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="border-2 border-emerald-500 rounded-lg p-8 bg-gray-800 shadow-xl">
        <h2 className="text-white text-2xl mb-6 text-center">Login</h2>
        <form
          onSubmit={(e) => {
            SubmiteHandler(e);
          }}
          className="flex flex-col items-center justify-center gap-4"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            required
            className="text-white outline-none border-2 border-emerald-500 bg-transparent text-xl py-3 px-5 placeholder:text-gray-400 w-80 rounded-full"
            placeholder="Enter Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            required
            className="text-white outline-none border-2 border-emerald-500 bg-transparent text-xl py-3 px-5 placeholder:text-gray-400 w-80 rounded-full"
            placeholder="Enter Password"
          />
          <button
            type="submit"
            className="bg-emerald-500 text-white px-6 py-2 rounded-full hover:bg-emerald-600 transition-colors mt-4"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
