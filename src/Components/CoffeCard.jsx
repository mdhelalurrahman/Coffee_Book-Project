import React, {useEffect, useState} from "react";
import {useLoaderData, useNavigate, useParams} from "react-router";
import Card from "./Card";

const CoffeCard = () => {
  const navigate = useNavigate();
  console.log(navigate);
  const obj = useParams();
  const data = useLoaderData();
  const [coffees, setCoffees] = useState([]);
  useEffect(() => {
    if (obj.categoriesId) {
      const filteredCoffees = [...data].filter(
        (coffee) => coffee.category === obj.categoriesId
      );
      setCoffees(filteredCoffees);
    } else {
      setCoffees(data.slice(0, 6));
    }
  }, [data, obj.categoriesId]);
  console.log(data);
  console.log(obj);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>

      {/* <button className="btn btn-warning" onClick={() => navigate(`/coffees`)}>
        View All
      </button> */}
      <button className={`btn btn-warning`} onClick={() => setCoffees(data)}>
        View All
      </button>
    </>
  );
};

export default CoffeCard;
