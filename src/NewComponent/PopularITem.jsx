import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../assets/poneimg.jpg'
import img2 from '../assets/burger.jpg'
export default function PopularITem() {
  return (
   <>
  <div className='max-w-4xl mx-auto'>
  <div className="text-center mt-44 mb-24 px-4 ">
      {/* Icon */}
      <div className="flex justify-center">
        {/* <BadgePercent className="w-9 h-12 text-blue-600" /> */}
      </div>

      {/* Title */}
      <h1 className="text-4xl font-semibold text-green-950 relative inline-block mt-3 uppercase">
        Popular Item for Our Dishes
        
      </h1>

      {/* Description */}
      <p className="text-gray-600 mt-3 max-w-xl mx-auto text-lg leading-relaxed">
        Select the membership that best fits your needs. Enjoy exclusive benefits, meal discounts, and premium features.
      </p>
    </div>
 <section  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
   {/* 1 */}
   <div>
       <div>
        <div className="card card-compact bg-base-100 w-72 shadow-xl">
          <figure>
            <img
              src={img1}
              className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-110"
              alt="Meal Plan"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold text-gray-800">
            Ice Cream
            </h2>
            {/* <p className="text-sm text-gray-600 mb-2 font-semibold">
      {Description}
    </p> */}
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg text-blue-600">
                {/* ${price}/month */}
              </p>
              <p className="font-semibold text-lg text-gray-700">
              Rating :  ⭐
              </p>
            </div>
            <div className="card-actions mt-4">
              <Link
                // to={`/meal/${_id}`}
                className="btn btn-sm btn-outline rounded-full hover:bg-yellow-600"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* 2 */}
    <div>
       <div>
        <div className="card card-compact bg-base-100 w-72 shadow-xl">
          <figure>
            <img
              src={img2}
              className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-110"
              alt="Meal Plan"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-semibold text-gray-800">
              Chichken roll
            </h2>
            {/* <p className="text-sm text-gray-600 mb-2 font-semibold">
      {Description}
    </p> */}
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg text-blue-600">
                {/* ${price}/month */}
              </p>
              <p className="font-semibold text-lg text-gray-700">
                {/* Rating: {rating} */}
                Rating :  ⭐
              </p>
            </div>
            <div className="card-actions mt-4">
              <Link
                // to={`/meal/${_id}`}
                className="btn btn-sm btn-outline rounded-full hover:bg-yellow-600"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* 3 */}
    <div>
       <div>
        <div className="card card-compact bg-base-100 w-72 shadow-xl">
          <figure>
            <img
              src={img2}
              className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 ease-in-out hover:scale-110"
              alt="Meal Plan"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl font-bold text-gray-800">
            Chichken Masala Roll
            </h2>
            {/* <p className="text-sm text-gray-600 mb-2 font-semibold">
      {Description}
    </p> */}
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg text-blue-600">
                {/* ${price}/month */}
              </p>
              <p className="font-semibold text-lg text-gray-700">
              Rating :  ⭐
              </p>
            </div>
            <div className="card-actions mt-4">
              <Link
                // to={`/meal/${_id}`}
                className="btn btn-sm btn-outline rounded-full hover:bg-yellow-600"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
 </section>
  </div>
   </>
 
  )
}
