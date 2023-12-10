const ProductDetail = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/watches/${params.id}`, {
    cache: "no-store",
  });
  const data = await res.json();

  const { image, name, price, features, status, rating } = data;
  return (
    <div className="w-[50%] mx-auto mt-28">
      <div className="card card-side bg-[#fff] text-gray-400 p-16">
        <img src={image} alt="Movie" width={"50%"} className="rounded" />

        <div className="card-body">
          <h2 className="card-title text-2xl">{name}</h2>
          {features.map((item, index) => (
            <div key={index} className="flex items-center gap-1">
              <div className="w-4 h-2 border border-primary bg-primary rounded"></div>
              <p className="text-lg">{item}</p>
            </div>
          ))}
          <button className="btn btn-primary text-white mt-2">BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
