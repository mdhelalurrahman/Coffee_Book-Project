import React from "react";
import {Link, useLocation} from "react-router";
import {MdDelete} from "react-icons/md";

const Card = ({coffee, handleRemove}) => {
  // console.log(coffee);
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="flex relative">
      <Link
        to={`/coffee/${coffee.id}`}
        className="transition hover:scale-105 shadow-lg rounded-xl overflow-hidden">
        <figure className="w-full h-48 overflow-hidden">
          <img src={coffee.image} alt="" />
        </figure>
        <div className="p-4">
          <h2 className="text-xl font-bold">{coffee.name}</h2>
          <p className="text-gray-600">{coffee.category}</p>
          <p>Type: {coffee.type}</p>
          <p>Origine:{coffee.origin}</p>
          <p>Rating: {coffee.rating}</p>
        </div>
      </Link>
      {location.pathname === "/dashboard" && (
        <div
          onClick={() => handleRemove(coffee.id)}
          className="absolute bg-amber-300 p-3 rounded-full  text-3xl -top-3 -right-3">
          <MdDelete />
        </div>
      )}
    </div>
  );
};

export default Card;
