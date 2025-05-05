import  { useState } from "react";
// import useMeal from "../Hook/useMeal";
import MealCard from "./MealCard";
import useAxiosPublic from "../Hook/useAxiosPublic";
import Loading from "../components/Loading";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import MealBanner from "./MealBanner";
                                         
export default function Meals() {
  const axiosPublic = useAxiosPublic();
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(500);
  const {
    data: meals = [],   
    isLoading,    
    // refetch,
  } = useQuery({
    queryKey: ["meals", filter, search,minPrice,maxPrice],
    queryFn: async () => {     
      const { data } = await axiosPublic(
        `/all-meals?filter=${filter}&search=${search}&minPrice=${minPrice}&maxPrice=${maxPrice}`
      );
      return data;
    },
  });
  if (isLoading) <Loading />;
  // console.log(filter)
  return (
    <div>   
      <Helmet>
        <title> Hostel Management | Meals</title>
      </Helmet>
      <div>
        <MealBanner />
      </div>
      <div className="w-11/12 mx-auto mt-28 space-y-6 md:space-y-0 md:flex md:items-center md:justify-between flex-col md:flex-row" id="all-meals">
  {/* Search */}
  <div className="w-full md:w-auto">
    <input
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      placeholder="Type your favourite Meal"
      className="input input-bordered input-info w-full max-w-xs "
    />
  </div>

  {/* Filters */}
  <div className="w-full md:w-auto">
    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap md:flex-nowrap md:gap-6">
      {/* Min Price */}
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="Min Price"
          onChange={(e) => setMinPrice(e.target.value)}
          className="input input-bordered input-info w-full max-w-xs  md:ml-5"
        />
      </div>

      {/* Max Price */}
      <div className="flex items-center gap-2">
        <input
          type="number"
          placeholder="Max Price"
          onChange={(e) => setMaxPrice(e.target.value)}
          className="input input-bordered input-info w-full max-w-xs"
        />
      </div>

      {/* Category Select */}
      <div className="flex items-center gap-2">
        <select
          className="select select-info w-full max-w-xs font-semibold"
          onChange={(e) => setFilter(e.target.value)}
        >
          <option disabled value="default">Select a category</option>
          <option value="Breakfast">Breakfast</option>
          <option value="Launch">Launch</option>
          <option value="Dinner">Dinner</option>
          <option value="All Meals">All Meals</option>
        </select>
      </div>
    </div>
  </div>
</div>
             
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-7 mt-10

">
        {meals?.map((item) => (   
          <MealCard key={item._id} items={item} />
        ))}
      </div>
    </div>   
  );
}