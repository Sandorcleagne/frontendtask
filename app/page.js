"use client";
import FilterSection from "@/components/FilterSection";
import ProductCard from "@/components/ProductCard";
import { productInfo } from "@/lib/products";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);
  // console.log(data);
  const [filteredData, setFilteredData] = useState([]);
  const callApi = async () => {
    const responsedata = await productInfo();
    if (responsedata.baseResponse.status === 1) {
      setData(responsedata.response.categories);
      console.log(responsedata.response.categories);
    } else {
      setData([]);
    }
  };
  useEffect(() => {
    callApi();
  }, []);
  return (
    <>
      <div className="w-100 h-screen">
        <div className="filter sm:hidden">
          <FontAwesomeIcon
            icon={faFilter}
            style={{ fontSize: 30, color: "black", cursor: "pointer" }}
          />
        </div>
        <div className="main-container flex justify-between">
          <div className="filter sm:block hidden w-1/5">
            <FilterSection data={data} setFilteredData={setFilteredData} />
          </div>
          <div className="product-section w-full sm:w-4/5 flex justify-center items-center p-5 flex-col gap-4 sm:flex-row sm:gap-8 sm:flex-wrap">
            {data.map((items) => (
              <ProductCard data={items} key={items.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
