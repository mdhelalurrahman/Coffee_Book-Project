import React from "react";
import Banner from "../Banner";
import Heading from "../Heading";
import {Outlet, useLoaderData} from "react-router";
import Categories from "../Categories";

const Home = () => {
  const categories = useLoaderData();

  return (
    <div>
      {/* Bannner */}
      <Banner> </Banner>
      {/* Heading */}
      <Heading
        title={`Browse Coffee by Category`}
        subtitle={`Choose Your Desired coffee to bitwise through specifle coffee that fit in your taste`}></Heading>
      {/* Categories Component */}
      <Categories categories={categories}></Categories>
      <Outlet></Outlet>

      {/* Dynamic  */}
    </div>
  );
};

export default Home;
