import {data, useLoaderData} from "react-router";
import Card from "../Card";
import {useState} from "react";

const Coffee = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);
  const handleSort = (sortBy) => {
    if (sortBy === "popularity") {
      const sortedCoffees = [...data].sort(
        (a, b) => b.popularity - a.popularity
      );
      setCoffees(sortedCoffees);
    } else if (sortBy === "rating") {
      const sortedCoffees = [...data].sort((a, b) => b.rating - a.rating);
      setCoffees(sortedCoffees);
    }
  };
  return (
    <>
      <div className="flex justify-between my-5">
        <div>
          <h1 className="text-3xl font-thin">
            Sort Coffee &apos; s by Popularity & Rating&gt;
          </h1>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => handleSort("popularity")}
            className="btn btn-warning">
            Sort By Popularity
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn btn-warning">
            Sort By Rating
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </>
  );
};

export default Coffee;
