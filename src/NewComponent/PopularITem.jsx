import React, { useState } from 'react';
import img1 from '../assets/poneimg.jpg';
import img2 from '../assets/burger.jpg';
import img3 from '../assets/slide2.jpg';
import img4 from '../assets/salad.jpg';

const meals = [
  {
    id: 1,
    name: 'Ice Cream',
    price: '$410',
    rating: '⭐⭐⭐',
    img: img1,
    description: 'Ice cream is a sweet, frozen dessert made from milk, cream, sugar, and flavorings. It comes in various flavors like vanilla, chocolate, and strawberry, often enjoyed in cones, cups, or with toppings like sprinkles and syrups.',
  },
  {
    id: 2,
    name: 'Chicken Roll',
    price: '$350',
    rating: '⭐⭐',
    img: img3,
    description: 'Chicken Roll** is a delicious snack made with spiced chicken wrapped in a soft paratha or tortilla. It is crispy on the outside and juicy inside, often served with sauces or chutneys for extra flavor..',
  },
  {
    id: 3,
    name: 'Mutton Roll',
    price: '$560',
    rating: '⭐⭐⭐⭐',
    img: img2,
    description: 'A Mutton Roll is a flavorful and satisfying dish made with spiced mutton (goat meat) that is marinated in a blend of aromatic spices, including garam masala, cumin, coriander, and turmeric. The mutton is typically cooked until tender and juicy.',
  },
  {
    id: 4,
    name: 'Egg Curry',
    price: '$250',
    rating: '⭐⭐⭐⭐',
    img: img4,
    description: "Egg Curry is a comforting and flavorful dish made with hard-boiled eggs simmered in a rich, spiced gravy. The curry sauce is typically made from ingredients like onions, tomatoes, garlic, ginger, and a variety of spices such as cumin, coriander, turmeric, garam masala, and chili powder, which create a fragrant and hearty base."
  },
];

export default function PopularItem() {
  const [selectedMeal, setSelectedMeal] = useState(null);

  return (
    <div className='max-w-7xl mx-auto'>
      <div className='text-center mt-44 mb-24 px-4'>
        <h1 className='text-4xl font-semibold text-green-950 uppercase'>Popular Items</h1>
        <p className='text-gray-600 mt-3 max-w-xl mx-auto text-lg leading-relaxed'>
          Choose from our most loved meals!
        </p>
      </div>
      <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {meals.map((meal) => (
          <div key={meal.id} className='card card-compact bg-base-100 w-72 shadow-xl'>
            <figure>
              <img src={meal.img} className='w-full h-48 object-cover rounded-t-lg hover:scale-110 transition duration-300' alt={meal.name} />
            </figure>
            <div className='card-body'>
              <h2 className='card-title text-xl font-semibold text-gray-800'>{meal.name}</h2>
              <div className='flex justify-between items-center'>
                <p className='font-semibold text-lg text-gray-500'>{meal.price}</p>
                <p className='font-semibold text-md text-gray-700'>Rate: {meal.rating}</p>
              </div>
              <div className='card-actions mt-4'>
                <button
                  className='btn btn-sm btn-outline rounded-full hover:bg-yellow-600'
                  onClick={() => setSelectedMeal(meal)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
      {selectedMeal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
            <h2 className='text-2xl font-semibold'>{selectedMeal.name}</h2>
            <img src={selectedMeal.img} className='w-full h-48 object-cover rounded-md mt-3' alt={selectedMeal.name} />
            <p className='mt-3 text-gray-600'>{selectedMeal.description}</p>
            <p className='mt-2 text-lg font-semibold'>{selectedMeal.price}</p>
            <p className='text-lg'>{selectedMeal.rating}</p>
            <button
              className='btn btn-sm btn-outline mt-4 w-full hover:bg-red-600'
              onClick={() => setSelectedMeal(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
