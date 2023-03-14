import { useState, useEffect } from "react";
const ShowProducts = () => {
  const [apiData, setapiData] = useState([]);
  const GetData = () => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((e) => setapiData(e))
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    GetData();
  }, []);

  return (
    <div className="mt-10  grid grid-cols-3 gap-4  ">
      {apiData.map((item, id) => (
        <div
          className="bg-white p-2 px-3 shadow-2xl  rounded-xl  space-y-1	"
          key={id}
        >
          <img
            src={item.img1}
            alt="img"
            className="
          w-full h-68 rounded-xl"
          />
          <h1 className="text-2xl">{item.name}</h1>
          <h1 className="text-gray-500 text-sm">{item.description}</h1>
          <div className="flex justify-between">
            <h1 className="text-gray-500 text-sm">
              <span className="text-black text-base ">Price</span>:{item.price}$
            </h1>
            <p className="text-gray-500 text-sm">
              <span className="text-black text-base ">stcok</span>:{item.stock}
            </p>
          </div>
          <p className="text-gray-500 text-sm">
            <span className="text-black text-base ">TotalSold</span>:
            {item.totalsold}
          </p>
        </div>
      ))}
    </div>
  );
};
export default ShowProducts;
