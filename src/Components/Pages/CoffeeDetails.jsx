import React, {useEffect, useState} from "react";
import {useLoaderData, useParams} from "react-router";
import nutrition from "../../assets/nutrition.png";
import {addFavorite, getAllFavorites} from "../Utils";

const CoffeeDetails = () => {
  const {id} = useParams();
  const allCoffeeData = useLoaderData();
  // console.log(allCoffeeData);
  const [coffee, setCoffee] = useState({});
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    const singleData = [...allCoffeeData].find((coffee) => coffee.id == id);
    setCoffee(singleData);
    const favorite = getAllFavorites();
    const isAlreadyExist = favorite.find((item) => item.id == singleData.id);
    if (isAlreadyExist) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }, [allCoffeeData, id]);
  const handleFavorite = (coffee) => {
    addFavorite(coffee);
    setIsFavorite(true);
  };
  return (
    <div className="transition hover:scale-105 shadow-lg rounded-xl overflow-hidden">
      <figure className="w-full object-cover  md:h-[500px] overflow-hidden">
        <img className="w-full h-full" src={coffee.image} alt="" />
      </figure>
      <div className="p-4">
        <div className="flex justify-between  my-4 items-center">
          <div className="">
            <h2 className="text-xl font-bold">{coffee.name}</h2>
            <p className="text-gray-600">{coffee.category}</p>
            <p>Type: {coffee.type}</p>
            <p>Origine:{coffee.origin}</p>
            <p>Rating: {coffee.rating}</p>
          </div>
          <div>
            <button
              disabled={isFavorite}
              onClick={() => handleFavorite(coffee)}
              className="btn btn-warning">
              Add Favorite
            </button>
          </div>
        </div>
        <div className="flex  md:flex-row gap-4 justify-between items-center">
          <div className=" ">
            <h1>Making Process</h1>
            <p>{coffee.making_process}</p>
            <div>
              <h1 className="text-xl font-bold">Ingredients</h1>
              <ul className="list-disc pl-4">
                {coffee.ingredients?.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-xl ">Nutrition</h1>

              <ul className="pl-4">
                {coffee.nutrition_info &&
                  Object.entries(coffee.nutrition_info).map(
                    ([key, value], index) => (
                      <li className="list-disc" key={index}>
                        {key}:{value}
                      </li>
                    )
                  )}
              </ul>
            </div>
          </div>
          <div className="flex w-full md:h-[300px] overflow-hidden">
            <img className="w-full h-full" src={nutrition} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
