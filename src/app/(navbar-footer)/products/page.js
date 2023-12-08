import Product from "@/components/UI/Product";

const Products = async () => {
  const res = await fetch("http://localhost:5000/watches", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <>
      <h1 className="text-4xl text-center my-10 text-gray-400">
        Welcome To Watch Gallery
      </h1>
      <div className="grid grid-cols-3 gap-5 p-10 w-[80%]  mx-auto">
        {data.map((item, index) => (
          <Product key={index} data={item} />
        ))}
      </div>
    </>
  );
};

export default Products;
