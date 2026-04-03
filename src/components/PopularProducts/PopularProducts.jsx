import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const PopularProducts = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

  return (
    <div>
      <div className="flex flex-col items-center text-center lg:w-150 mx-auto">
        <h4 className="text-[#FF3811] font-semibold uppercase">
          Popular Products
        </h4>
        <h1 className="text-2xl lg:text-5xl font-bold mt-2">
          Browse Our Products
        </h1>
        <p className="text-[#737373] mt-4">
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </div>

      {/* CARD ITEMS */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-10 mx-5 lg:mx-0">
            {
                products.map((product, id) => <ProductCard key={id} product={product}></ProductCard>)
            }
      </div>

                    <div className="flex justify-center">
          <button className="btn my-10 border border-orange-600 text-orange-600 bg-transparent hover:bg-orange-600 hover:text-white">
            More Products
          </button>
        </div>
    </div>
  );
};

export default PopularProducts;
