import React, { lazy, Suspense, useEffect, useState } from "react";
import Features from "../components/Features";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import UserSection from "../components/UserSection";
import Spinner from "../components/utils/Spinner";
import Loader from "../components/utils/Loader";
import { FloatButton } from "antd";

// import Products from "../components/Products";

const Products = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("../components/Products"));
    }, 5000);
  });
});
// const Products = lazy(() => import("../components/Products"));

const Home = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("UseEffect is working");
    // document.title = "UseEffect class"; changes te document name
  }, []);
  //Dependency Array
  return (
    <section>
      <Navbar />
      <Hero />
      <Features />
      <UserSection />
      <Suspense fallback={<Loader />}>
        <Products />
      </Suspense>
      <FloatButton.BackTop visibilityHeight={0} />
      {/* <button onClick={() => setCount(count + 1)}>Add</button> */}
    </section>
  );
};

export default Home;
