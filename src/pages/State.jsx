import { useState } from "react";
import { useNavigate } from "react-router-dom";

const State = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const handleSubmit = () => {
    navigate("/");
  };
  return (
    <section className="p-24">
      <form
        onSubmit={handleSubmit}
        className="space-y-2 m-auto w-full h-full flex flex-col"
      >
        <div className="border-[1px] border-gray-400 rounded-lg w-[400px] h-[30px] pl-3">
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="outline-none"
            type="text"
            placeholder="Enter your full Name"
            name="full-name"
            required
          />
        </div>
        <div className="border-[1px] border-gray-400 rounded-lg w-[400px] h-[30px] pl-3">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-none w-full"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="border-[1px] border-gray-400 rounded-lg w-[400px] h-[30px] pl-3">
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-none"
            type="text"
            placeholder="Enter your password"
            required
          />
        </div>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border-[1px] border-gray-400 rounded-lg w-[400px] h-[100px] pl-3 resize-none outline-none"
          placeholder="Enter your message"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 px-4 py-2 rounded-lg w-fit text-white"
        >
          Submit
        </button>
      </form>
    </section>
  );

  // const [count, setCount] = useState(0);
  // const add = () => {
  //     if (count < 10)
  //     setCount(count + 1);
  // };
  // const remove = () => {
  //     if (count > 1)
  //     setCount(count - 1);
  // };
  // return (
  //     <div className="p-[200px] flex items-center gap-10">
  //         <button onClick={add} className="px-4 py-2 bg-blue-400 text-white rounded-lg">Add</button>
  //         <span className="font-bold text-3xl">{count}</span>
  //         <button onClick={remove} className="px-4 py-2 bg-red-400 text-white rounded-lg">Remove</button>
  //     </div>
  // );

  // const [name, setName] = useState("John");
  // function changeName() {
  //     setName("Segun");
  // }
  // return(
  //     <div className="p-[200px] text-3xl">
  //         <p>{name}</p>
  //         <button onClick={changeName} className="border-2 border-black rounded-xl text-xs px-3">Change Name</button>
  //     </div>
  // );

  // const [name, setName] = useState("");

  // const login = () => {
  //     setName("John Doe");
  // };
  // const logout = () => {
  //     setName("");
  // };
  // return(
  //     <div className="p-[200px] flex items-center gap-10">
  //         <p>{name}</p>
  //         <button onClick={login} className="bg-green-400 text-white px-4 py-2 rounded-lg">
  //             Login
  //          </button>
  //           <button onClick={logout} className="bg-red-400 text-white px-4 py-2 rounded-lg">
  //             Logout
  //          </button>
  //     </div>
  // );
};

export default State;
//Declare your useState (make use it is imported from react)
//initial value should be 0
//Render your count variable inside your UI (JSX)
//create two functions (decreasing and increasing)
//inside your function , you update the value of your state

//create a simple login system using useState

//FORM HANDLING
//conditional rendering in react
