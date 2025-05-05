export default function MealBanner() {
  return (
    <div>
      <div>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://img.freepik.com/free-photo/chicken-steak-with-lemon-tomato-chili-carrot-white-plate_1150-25888.jpg?ga=GA1.1.1974556110.1745246806&semt=ais_hybrid&w=740)",
          }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl font-bold">
                Manage <span className="text-green-200">meals</span> with ease
              </h1>
              <p className="mb-5">
                Streamline your hostel meal planning and distribution. From
                breakfast to dinner, keep track of every student preferences,
                ensure timely servings, and reduce food waste — all in one
                place.
              </p>

             <a href="#all-meals"> <button className="btn btn-green px-6 py-2 text-lg font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300">See All Meal</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
