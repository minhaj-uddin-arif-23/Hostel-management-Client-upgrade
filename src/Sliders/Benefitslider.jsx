import React from "react";
import { CheckCircle, ShieldCheck, Clock } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: <CheckCircle className="w-10 h-10 text-green-500" />,
      title: "Reliable Service",
      description: "Our system ensures smooth hostel management with 24/7 reliability.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-blue-500" />,
      title: "Secure & Safe",
      description: "We prioritize safety with secure resident profiles and monitoring.",
    },
    {
      icon: <Clock className="w-10 h-10 text-yellow-500" />,
      title: "Fast Processing",
      description: "Automated processes save time for room allocation and payments.",
    },
  ];

  return (
    <div className="py-12 my-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900">Why Choose Us?</h2>
        <p className="text-gray-600 mt-2">
          Discover why our hostel management system is the best choice.
        </p>

        {/* Benefits Grid */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center hover:shadow-lg transition-all"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
              <p className="text-gray-600 text-sm text-center mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
