function Card() {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-6">
      
      <h2 className="text-2xl font-bold mt-4">
        React Card
      </h2>

      <p className="text-gray-600 mt-2">
        This is a simple card component made using React and Tailwind CSS.
      </p>

      <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
        Learn More
      </button>

    </div>
  );
}

export default Card;