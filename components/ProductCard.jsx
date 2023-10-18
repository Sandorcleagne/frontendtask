import { imageurl } from "@/utils/static";
import {
  faCartPlus,
  faHeart,
  faPercentage,
  faRupee,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const ProductCard = ({ data }) => {
  const starRating = (n) => {
    let arr = [];
    for (let i = 1; i <= n; i++) {
      arr.push("1");
    }
    return arr;
  };
  return (
    <>
      <div className="w-60" key={data.id}>
        <div className="image-section h-60 w-full rounded-t-md">
          <Image
            src={imageurl + data.images}
            height={500}
            width={400}
            alt={data.title}
            className="rounded-t-md"
          />
        </div>
        <div className="info w-full h-48 bg-slate-100 rounded-b-md">
          <p className="title pl-3 font-semibold pt-2">{data.title}</p>
          <div className="w-full flex justify-between items-center">
            <p className="price pl-3 font-semibold pt-2">
              <FontAwesomeIcon icon={faRupee} color="black" />
              {""} {`${data.price}`}
            </p>
            {/* <p className="pr-3 font-semibold pt-2 text-red-600">
              <del>
                {""} {`${data.discountPercentage}`}
                <FontAwesomeIcon icon={faPercentage} className="text-red-600" />
              </del>
            </p> */}
          </div>
          {/* {starRating(Math.floor(data.rating)).map((items, index) => (
            <FontAwesomeIcon
              icon={faStar}
              className="text-yellow-400 pl-3"
              key={index}
            />
          ))} */}

          <p className="pl-3 mt-1 font-medium text-left truncate">
            {data.description}
          </p>
          <div className="action flex justify-between items-center pl-3 mt-3">
            <button className="border-none bg-slate-900 text-gray-200 px-6 py-1 rounded-md flex justify-between items-center gap-3 cursor-pointer">
              <FontAwesomeIcon icon={faCartPlus} color="white" />
              Add To Cart
            </button>
            <FontAwesomeIcon
              icon={faHeart}
              className="text-2xl pr-3 text-red-500"
              fillOpacity={1}
              cursor={"pointer"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
