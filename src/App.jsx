import About from "./pages/About";
import Condition from "./pages/Condition";
import Home from "./pages/Home";
import AuthPage from "./pages/LoginPage";
import State from "./pages/State";
import { Routes, Route } from "react-router-dom";
import TodoApp from "./pages/Todo";
import PostPage from "./pages/PostPage";
import LoginPage from "./pages/AuthPage";
import SingleProductPage from "./pages/SingleProduct ";
import SinglePostPage from "./pages/SinglePostPage";
import Error from "./pages/Error";
import SignInPage from "./pages/SignInPage";
import Counter from "./pages/Counter";

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/state" element={<State />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/auth" element={<LoginPage />} />
        <Route path="/products/:id" element={<SingleProductPage />} />
        <Route path="/post/:id" element={<SinglePostPage />} />
        <Route path="*" element={<Error />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </section>
  );
}

export default App;
