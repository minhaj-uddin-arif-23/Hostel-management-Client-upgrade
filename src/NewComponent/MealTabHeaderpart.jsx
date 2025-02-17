import React from "react";
import { UtensilsCrossed, Sun, Moon, Coffee } from "lucide-react";

export default function MealTabHeaderpart() {
  return (
    <div className="mb-12 mt-20 text-center">
      {/* Heading Section */}
      <h1 className="text-3xl font-bold text-gray-900 flex justify-center items-center gap-2 uppercase">
        <UtensilsCrossed className="w-7 h-7 text-gray-900 " />
     Our Regular   Meal Schedule
      </h1>
      <p className="text-gray-600 mt-3 text-lg font-medium">
        Choose your meal category and explore the available options!
      </p>
      <p className="text-gray-500 mt-2 text-sm max-w-md mx-auto">
        Start your day with a healthy breakfast, enjoy a fulfilling lunch, or have a comforting dinner—all in one place.
      </p>

      {/* Meal Category Icons */}
      <div className="flex justify-center gap-6 mt-6">
        <div className="flex flex-col items-center group cursor-pointer transition-transform duration-200 hover:scale-110">
          <Coffee className="w-8 h-8 text-orange-500 group-hover:text-orange-600" />
          <p className="text-md font-semibold text-gray-800 mt-1">Breakfast</p>
        </div>
        <div className="flex flex-col items-center group cursor-pointer transition-transform duration-200 hover:scale-110">
          <Sun className="w-8 h-8 text-yellow-500 group-hover:text-yellow-600" />
          <p className="text-md font-semibold text-gray-800 mt-1">Lunch</p>
        </div>
        <div className="flex flex-col items-center group cursor-pointer transition-transform duration-200 hover:scale-110">
          <Moon className="w-8 h-8 text-blue-500 group-hover:text-blue-600" />
          <p className="text-md font-semibold text-gray-800 mt-1">Dinner</p>
        </div>
      </div>
    </div>
  );
}
