import React from "react";
import { BadgePercent } from "lucide-react";

export default function PlanHeading() {
  return (
    <div className="text-center my-20 px-4">
      {/* Icon */}
      <div className="flex justify-center">
        {/* <BadgePercent className="w-9 h-12 text-blue-600" /> */}
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-gray-900 relative inline-block mt-3 uppercase">
        Find the Best Membership for You
        <span className="absolute left-1/2 -bottom-1 w-24 h-1 bg-gradient-to-r from-blue-500 to-green-400 transform -translate-x-1/2 rounded-full"></span>
      </h1>

      {/* Description */}
      <p className="text-gray-600 mt-3 max-w-xl mx-auto text-lg leading-relaxed">
        Select the membership that best fits your needs. Enjoy exclusive benefits, meal discounts, and premium features.
      </p>
    </div>
  );
}
