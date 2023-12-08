/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const Product = ({ data }) => {
  const { name, image, price, id } = data;

  return (
    <Link href={`/products/${id}`}>
      <div className="card bg-[#2a323c] text-gray-400 shadow  hover:shadow-xl hover:scale-[102%] transition-all">
        <figure>
          <img
            src={image}
            alt="Shoes"
            style={{
              width: "100%",
              height: "400px",
            }}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-primary text-white">NEW</div>
          </h2>
          <p className="font-bold">${price}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
          <button className="btn btn-primary text-white mt-4">
            DESCRIPTION
          </button>
        </div>
      </div>
    </Link>
  );
};

export default Product;
