import React, {useEffect, useState} from "react";
import Heading from "../Heading";
import {getAllFavorites, removeFavorite} from "../Utils";
import Card from "../Card";

const Dasborad = () => {
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    const favoriteCoffeses = getAllFavorites();
    setCoffees(favoriteCoffeses);
  }, []);
  const handleRemove = (id) => {
    removeFavorite(id);
    const favoriteCoffeses = getAllFavorites();
    setCoffees(favoriteCoffeses);
  };
  return (
    <div>
      <Heading
        title={`Welcome to Coffee House`}
        subtitle={`Choose Your Desired coffee to bitwise through specifle coffee that fit in your taste`}></Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {coffees.map((coffee) => (
          <Card
            handleRemove={handleRemove}
            key={coffee.id}
            coffee={coffee}></Card>
        ))}
      </div>
    </div>
  );
};

export default Dasborad;
