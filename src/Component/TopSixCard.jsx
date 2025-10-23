import React from "react";
import { Link } from "react-router";

const TopSixCard = ({ loadData }) => {
  const firstSix = loadData.filter((plant) => plant.rating >= 4.5).slice(0, 6);

  return (
    <div className="container mx-auto grid  md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
      {firstSix.map((plant) => (
        <div
          key={plant.plantId}
          className="rounded-xl shadow-lg overflow-hidden bg-[#ffffff] hover:bg-[#f7edde] transition-colors duration-900"
        >
          <img
            src={plant.image}
            alt={plant.plantName}
            className="max-w-2xs bg-cover"
          />
          <div className="p-4 flex flex-col gap-2">
            <h2 className="font-semibold text-lg">{plant.plantName}</h2>
            <p className="text-green-600 font-bold">${plant.price}</p>
            <p className="text-yellow-500">⭐ {plant.rating}</p>
            <Link
              to={`/plant-details/${plant.plantId}`}
              className="mt-3 cursor-pointer bg-[#2a7d2e] text-white px-4 py-2 rounded-lg hover:bg-[#222e1f] transition-colors duration-900 text-center"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopSixCard;
