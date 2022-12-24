import { useState, useEffect } from "react";
import Button from "../Button/button";
import { useNavigate } from "react-router-dom";

const RecentOrder = () => {
  const [tableData, setTableData] = useState([]);
  const navigate = useNavigate();

  const GetData = () => {
    fetch("http://localhost:5000/orders")
      .then((response) => response.json())
      .then((e) => setTableData(e))
      .catch((err) => {
        console.log(err);
      });
  };
  const UserPage = () => {
    navigate("/dashbord/orders");
  };
  useEffect(() => {
    GetData();
  }, []);
  return (
    <div className="mt-10">
      <h1 className="text-start  text-4xl  text-blue-500 "> Recent Order </h1>
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-black  mt-6">
          <thead className="text-md text-white uppercase bg-blue-500 ">
            <tr>
              <th scope="col" className="py-3 px-6 text-lg font-light">
                Id
              </th>
              <th scope="col" className="py-3 px-6 text-lg font-light">
                First Name
              </th>
              <th scope="col" className="py-3 px-6 text-lg font-light">
                Phone No
              </th>
              <th scope="col" className="py-3 px-6 text-lg font-light">
                Email
              </th>
              <th scope="col" className="py-3 px-6 text-lg font-light">
                City
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.slice(0, 4).map((item, id) => (
              <tr>
                {" "}
                <td className="py-4 px-6 text-lg font-light text-gray-600">
                  {item.id}
                </td>
                <td className="py-4 px-6 text-lg font-light text-gray-600">
                  {item.firstname}
                </td>
                <td className="py-4 px-6 text-lg font-light text-gray-600">
                  {item.phoneNumber}
                </td>{" "}
                <td className="py-4 px-6 text-lg font-light text-gray-600">
                  {item.email}
                </td>
                <td className="py-4 px-6 text-lg font-light text-gray-600">
                  {item.city}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Button
        children="Show Orders"
        varient="inline-flex my-5 items-center rounded border border-transparent bg-blue-100 px-4 py-1.5 text-lg font-medium text-blue-500 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2  w-36"
        onClick={UserPage}
      />
    </div>
  );
};
export default RecentOrder;
