import React from 'react';
// import Products from './Products';
import { FaStar } from 'react-icons/fa6';
import Img1 from "../assets/women.png";
import Img2 from "../assets/women2.jpg";
import Img3 from "../assets/women3.jpg";
import Img4 from "../assets/women4.jpg";

const ProductsData = [
    {
        id: 1,
        img: Img1,
        tittle: "Women Ethnic",
        rating: 5.0,
        Color: "white",
        aosDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        tittle: "Women Western",
        rating: 4.5,
        Color: "red",
        aosDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        tittle: "Goggles",
        rating: 4.7,
        Color: "brown",
        aosDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        tittle: "Printed T-Shirt",
        rating: 4.4,
        Color: "Yellow",
        aosDelay: "600",
    },
    {
        id: 5,
        img: Img2,
        tittle: "Fashion T-Shirt",
        rating: 4.4,
        Color: "Pink",
        aosDelay: "800",
    },
]
const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* Header Section  */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you</p>
            <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">All varieties of Products are available at an affordable price in oue Shope</p>
        </div>
        {/* Body section  */}
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                {/* Card section  */}
                {
                    ProductsData.map((data) =>(
                        <div
                        data-aos="fade-up" data-aos-delay={data.aosDelay}
                        key={data.id} className="space-y-3">
                            <img src={data.img} alt="" className="h-[220px] w-[150px] object-cover rounded-md" />

                            <div>
                                <h3 className="font-semibold">{data.tittle}</h3>
                                <p className="text-sm text-gray-600">{data.Color}</p>
                                <div className="flex items-center gap-1">
                                    <FaStar className="text-yellow-400"/>
                                    <span>{data.rating}</span>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            {/* view all button  */}
            <div className="flex justify-center">
                <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">View All Button</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Products
