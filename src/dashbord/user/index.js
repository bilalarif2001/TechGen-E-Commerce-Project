import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Input from "../../components/Input";
import Button from "../../components/button";
import ".//..//../App.css";

const User = () => {
  const [tableData, setTableData] = useState([]);
  const [searchData, setSearchData] = useState(""); // for search deatails

  const [pageNumber, setPageNumber] = useState(0);
  // const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const userperPage = 5;
  const vistedPages = pageNumber * userperPage;
  const count = Math.ceil(tableData.length / userperPage);
  // console.log(searchData, "searchDAta");
  const GetData = () => {
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((e) => setTableData(e))
      .catch((err) => {
        console.log(err);
      });
  };
  const ChangePage = (e) => {
    setPageNumber(e.selected);
  };

  const getfilterData = (val) => {
    if (searchData === "") {
      return val;
    } else if (val.firstname.toLowerCase().includes(searchData)) {
      return val;
    } else {
    }
  };
  const BlockUser = (e) => {
    console.log(e.id);
    const data = { ...e, block: true };
    fetch(`http://localhost:5000/users/${e.id} `, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 200) {
        setIsLoading(true);
      }
    });
  };
  const UnblockBlockUser = (e) => {
    console.log(e.id);
    const data = { ...e, block: false };
    fetch(`http://localhost:5000/users/${e.id} `, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.status === 200) {
        setIsLoading(true);
      }
    });
  };

  useEffect(() => {
    GetData();
  }, [isLoading]);

  return (
    <div>
      <h1 className="text-start  text-4xl  text-blue-500 ">User Details</h1>

      <Input
        className="border-4 border-blue-500  rounded-xl w-full p-2 mt-5 focus:outline-0"
        placeholder="Search By Name"
        type="text"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
      />

      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-black  mt-6">
          <thead className="text-md text-white uppercase bg-blue-500 ">
            <tr>
              <th scope="col" className="py-6 px-6">
                First Name
              </th>
              <th scope="col" className="py-3 px-6">
                Email
              </th>
              <th scope="col" className="py-3 px-6">
                Gender
              </th>
              <th scope="col" className="py-3 px-6">
                Age
              </th>
              <th scope="col" className="py-3 px-6">
                Block status
              </th>
              <th scope="col" className="py-3 px-6">
                Block User
              </th>
              <th scope="col" className="py-3 ">
                Unblock User
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData
              .filter(getfilterData)
              .slice(vistedPages, vistedPages + userperPage)
              .map((item, id) => (
                <tr className="bg-white border-b " key={id}>
                  <td className="py-4 px-6">{item.firstname}</td>
                  <td className="py-4 px-6">{item.email}</td>
                  <td className="py-4 px-6">{item.gender}</td>
                  <td className="py-4 px-6">{item.age}</td>
                  <td className="py-4 px-6">{item.block.toString()}</td>

                  <td>
                    <Button
                      children="Block User"
                      varient="text-white bg-blue-500 p-2  w-32 mt-2 ml-4 rounded-md"
                      onClick={(e) => BlockUser(item)}
                    />
                  </td>
                  <td>
                    <Button
                      children="Unbslock User"
                      varient="text-white bg-blue-500 p-2  w-32 mt-2  rounded-md"
                      onClick={(e) => UnblockBlockUser(item)}
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <div className="mt-3 flex items-center justify-center ml-10">
        <ReactPaginate
          previousLabel="< Pre"
          nextLabel="Next"
          pageCount={count}
          onPageChange={ChangePage}
          pageRangeDisplayed={10}
          marginPagesDisplayed={4}
          containerClassName={"containerClass  "}
          previousLinkClassName={"previousLinkClassName"}
          nextLinkClassName={"nextLinkClassName"}
          disabledClassName="disabled"
          activeClassName={"activeClassName"}
        />
      </div>
    </div>
  );
};
export default User;
