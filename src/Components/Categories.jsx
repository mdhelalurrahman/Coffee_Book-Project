import React from "react";
import {NavLink} from "react-router";

const Categories = ({categories}) => {
  //   console.log(categories);
  return (
    <div
      role="tablist"
      className="tabs tabs-lift flex justify-between items-center my-10 gap-10">
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/categories/${category.category}`}
          role="tab"
          className={({isActive}) =>
            `tab ${isActive ? " bg-amber-500" : ""} `
          }>
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
